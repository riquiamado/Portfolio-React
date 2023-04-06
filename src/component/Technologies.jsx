import React from 'react'
import html from "../assets/iconos de skills/html.jpg"
import css from "../assets/iconos de skills/css.png"
import Js from "../assets/iconos de skills/js.png"
import react from "../assets/iconos de skills/react.png"
import redux from "../assets/iconos de skills/redux.png"
import node from "../assets/iconos de skills/node.png"
import mongodb from "../assets/iconos de skills/mongodb.jpg"
import postgresql from "../assets/iconos de skills/postgresql.png"
import materialui from "../assets/iconos de skills/materialui.png"



import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


import StarRating from './StarRating'
import {  Paper, Typography } from '@mui/material'
import  {makeStyles}  from '@material-ui/core';

const skills = [
    {
        year: "2022",
        src: html,
        title: "html 5",
        stars: 4
    },
    {
        year: "2022",
        src: css,
        title: "css",
        stars: 4
    },
    {
        year: "2022",
        src: Js,
        title: "JavasCript",
        stars: 4
    },
    {
        year: "2022",
        src: react,
        title: "React",
        stars: 4
    },
    {
        year: "2022",
        src: redux,
        title: "Redux",
        stars: 4
    },
    {
        year: "2022",
        src: node,
        title: "Node JS",
        stars: 4
    },
    {
        year: "2022",
        src: mongodb,
        title: "Mongo DB",
        stars: 4
    },
    {
        year: "2022",
        src: postgresql,
        title: "PostgreSQL",
        stars: 4
    },
    {
        year: "2022",
        src: materialui,
        title: "Material UI",
        stars: 4
    },
]

const Technologies = () => {
    const classes = useStyles()
    return (
        <Timeline align="left" >

            {
                skills.map(({ year, src, title, stars }, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant='h6' color='textSecondary'>
                                {year}
                            </Typography>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <img src={src} alt={title} className={classes.logo} />

                            </TimelineDot>
                            <TimelineConnector></TimelineConnector>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={5} className={classes.paper} >
                                <Typography variant='h6' component="h1" >
                                    {title}
                                </Typography>
                                <StarRating stars={stars} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>

    )
}

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "25px",
    },
    paper: {
        padding: "6px 16px",
        maxWidth: "200px"
    }
}))

export default Technologies