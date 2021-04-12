import express from 'express';
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'
import compress from 'compression'
import httpStatus from 'http-status'
import cookieParser from 'cookie-parser'
import { validate, ValidationError, Joi } from 'express-validation'
import cors from 'cors'
import passport from 'passport'
import _ from 'lodash'

import APIError from "./helpers/APIError"
import { initAuth } from "./auth";

dotenv.config({ path: './.env' });

const uri = process.env.MONGODB_CONNECTION_LINK;

mongoose.connect(uri, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once("open", function(){
    console.log('MongoDB connection established successfully')
})

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '6mb', extended: true, parameterLimit: 3000 }));

//  helmet
app.use(helmet());

//  compress http requests
app.use(compress())

app.use(cookieParser(process.env.COOKIE_SECRET))

//  CORS
const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token'],
};

app.use(cors(corsOption));

app.use(passport.initialize());
app.use(passport.session());

// pipe with passport strategies
initAuth(app);

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get('/', async(req,res,next)=>{
    res.send(200)
})

//  app routes
app.use(`${process.env.API_URL_PREFIX}`, require('./routes/index.route'));

// 404 handling
app.use((req,res,next)=>{
    if (process.env.NODE_ENV != 'development'){
        return res.send(httpStatus.NOT_FOUND);
    }
    return next(new APIError('route not found', httpStatus.NOT_FOUND))
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port: ${process.env.PORT}`)
})