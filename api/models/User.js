import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        last_name: {
            type: String
        },
        first_name: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String,
            select: false
        },
        email: {
            type: String,
            select:false
        },
        avatar: {
            type: String
        },
        providerId: {
            type: String,
        },
        providerName:{
            type: String,
        },
        accessToken: {
            type: String
        },
        bio_text: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)