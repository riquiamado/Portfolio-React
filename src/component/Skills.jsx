import React from 'react'


import Technologies from './Technologies';
import {  Typography } from '@mui/material';
import  {makeStyles}  from '@material-ui/core';



const Skills = ({ dark, title, id }) => {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant='h3'>{title}</Typography>
                <Technologies />
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
    }
}))

export default Skills