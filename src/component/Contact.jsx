

import { Typography } from "@mui/material";
import {
  Button,
  IconButton,
  makeStyles,
  Paper,
  Radio,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { purple } from "@material-ui/core/colors";
import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_drmxap8",
        "template_sc9incm",
        event.target,
        "tJ_2kwathSFEKEjIO"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    alert("mensaje enviado");
  };

  return (
    <>
      <div className={`${classes.section} ${dark && classes.sectionDark}`}>
        <div className={classes.sectionContent} id={id}>
          <Typography variant="h3">{title}</Typography>
          <Paper className={classes.root}>
            <div className={classes.titleAndRadio}>
              <Typography variant="h5">CONTACT ME</Typography>
              <div className={classes.choices}>
                <span>Say Hello</span>
                <Radio
                  value={"Say Hi"}
                  checked={value === "Say Hi"}
                  color="primary"
                  onChange={handleChange}
                />
                <span>Get a Quote</span>
                <Radio
                  value={"Get a Quote"}
                  checked={value === "Get a Quote"}
                  color="primary"
                  onChange={handleChange}
                />
              </div>
            </div>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={sendEmail}
            >
              <TextField label="Your Name" name="user_name" />
              <TextField label="Your email" name="user_email" />
              {value === "Get a Quote" ? (
                <>
                  <TextField label="Needed Services" name="services" />
                  <TextField label="Estimated Budget" name="budget" />
                </>
              ) : null}
              <TextField label="Write a Message" name="message" />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </div>
      <div className={classes.root2}>
        <IconButton
          color="primary"
          aria-label="github"
          className={classes.iconButton}
          onClick={() => window.open("https://github.com/riquiamado")}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="linkedin"
          className={classes.iconButton}
          onClick={() =>
            window.open("https://www.linkedin.com/in/carlos-amado-8a61981b9/")
          }
        >
          <LinkedInIcon fontSize="large" className={classes.icon} />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="twitter"
          className={classes.iconButton}
          onClick={() => window.open("https://twitter.com/carlose61162555")}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    // minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
  root: {
    marginTop: theme.spacing(2),
    background: "tomato",
    color: "#fff",
    fontSize: "1.2rem",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button": {
      backgroundColor: "#fff",
      color: "tomato",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      backgroundColor: purple[500],
      color: "#fff",
    },
  },
  sectionContent: {
    maxWidth: "80vw",
  },
  titleAndRadio: {
    "& h5": {
      marginTop: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& input": {
      marginBotton: theme.spacing(1),
    },
  },
  root2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    margin: "0 auto",
    fontSize:"1.2rem",
    marginTop: theme.spacing(2),
    maxWidth:"320px",
    backgroundColor: "tomato",
    borderRadius:"10px",
    color: "#fff",
    "& button": {
        backgroundColor: "#fff",
        color: "tomato",
        fontWeight: 900,
        fontSize: "1.2rem",
        marginTop: theme.spacing(4),
      },
      "& button:hover": {
        backgroundColor: purple[500],
        color: "#fff",
      },
  },
  iconButton: {
    margin: 20,
   color:"#fff"
  },
  
}));
export default Contact;
