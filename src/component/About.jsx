import {  Card, CardActions, CardContent, CardMedia,  Typography } from '@mui/material';
import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import pdf from "../assets/Carlos Enrique Amado.pdf"
import  {Button, makeStyles}  from '@material-ui/core';




const About = ({ title, dark, id }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`} >
            <div className={classes.sectionContent} id={id} >
                <Typography variant='h3'>{title} </Typography>
                <Card className={classes.card}>
                    <CardMedia image={"https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856457/portfolio/mifoto_ilxbph.png"} className={classes.media} title="picture" />
                        <CardContent className={classes.cardContent}>
                            <TypeWriterEffect
                            text="Hola, me llamo Carlos Amado "
                            textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "tomato" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                             />
                            <TypeWriterEffect
                            text="Soy Desarrollador Web de Argentina"
                            textStyle={{ fontSize: "1.2rem", fontWeight: "500px" }}
                            startDelay={3000}
                            cursorColor="black"
                            typeSpeed={100}
                            />

                        </CardContent>
                    <CardActions>
                        <Button  variant='contained' className={classes.pdfButton} >
                            <a href={pdf} download >Download CV</a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: "#333",
        color: "#fff"
    },
    sectionContent: {
        maxWidth: "150vh",
        margin: "0 auto"
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
         position: "relative"
    },
    media: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardContent: {
        marginTop: theme.spacing(4)
    },
    pdfButton: {
    position:"absolute",
    bottom:"5rem",
    right:"4rem",
    [theme.breakpoints.down("sm")]:{
        bottom:10,
        right:"1rem"
    },
    backgroundColor:"tomato",
    padding:theme.spacing(3),
    "&:hover": {
     backgroundColor:"#fff",
    },
    "& a" :{
        color:"#fff",
        textDecoration:"none",
        fontWeight:900
    },
    "& a:hover":{
        color:"tomato"
    }
    },
   
}))

export default About