

import { Card, CardContent, CardMedia, Grid, Link,  Typography } from '@mui/material'
import  {makeStyles}  from '@material-ui/core';
import MyDataWorks from './DataWorks'

const MyWork = ({ id, title, dark }) => {
    const classes = useStyles()
    console.log(MyDataWorks[1].title)
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant='h3'>{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        MyDataWorks.map(({title,image,linkDeploy},index)=>(

                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={image} titulo="caratula"  className={classes.image}/>
                                    <CardContent>
                                        <Link href={linkDeploy} color="primary" target="-blank" rel='noopener noreferrer'>                                          
                                            {title}    
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                      ))
                    }
                </Grid>
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
    sectionContent:{
        maxWidth:"90vw",
        margin: "0 auto",
        padding: theme.spacing(5)
    },
    grid:{
        marginTop: theme.spacing(10),
    },
    card : {
        maxWidth:345,
        minHeight:275,
        margin: theme.spacing(3)
    },
    image :{
     height: 0,
     paddingTop:"53.25%"
    }

}))

export default MyWork