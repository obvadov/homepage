import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles =
    makeStyles({
        button: {
            display: 'flex',
            color: '#444',
            fontSize:"1.2rem",
            borderRadius: '3px',
            height: '36px',
            cursor: 'pointer',
            textDecoration: 'underline',
            '&:hover': {
                textDecoration: 'none',
            }
        },
        wrapper:{
            margin:'10px',
            display:'flex',
            justifyContent:'center',
            alignContent:"center",
            width: '40px',
            height: '40px',
            backgroundColor:'#fff'
        },
        icon: {
            height:'20px',
            width:'20px',
        },
        text:{
            margin:'5px',
            color:'#fff',
            textAlign:"center",
            alignContent:'center',
            textTransform:'bold'
        }
    }
)

const FacebookSignInButton = () => {
    const classes = useStyles({})

    return (
        <a href={`${process.env.REACT_APP_API_URL_PREFIX}/auth/fb`} className={classes.button}>
            FbLogin
        </a>
    )
}

export {
    FacebookSignInButton
}