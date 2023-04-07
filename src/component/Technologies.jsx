


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
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856788/portfolio/html_kbjcnf.png",
        title: "html",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856497/portfolio/images_rb6l1f.png",
        title: "css",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856345/portfolio/js_lb6mlh.png",
        title: "js",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856346/portfolio/react_uub1ew.png",
        title: "react",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856502/portfolio/descarga_bef32y.png",
        title: "redux",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856345/portfolio/node_vvfhqx.png",
        title: "node",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856345/portfolio/mongodb_pvgfne.jpg",
        title: "mongodb",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856345/portfolio/postgresql_xykypt.png",
        title: "postgresql",
        stars: 4
    },
    {
        year: "2022",
        src: "https://res.cloudinary.com/dwyfwbq1s/image/upload/v1680856345/portfolio/materialui_xl78nk.png",
        title: "materialui",
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