


import  {makeStyles}  from '@material-ui/core';
import Navbar from './component/Navbar.jsx';
import About from "./component/About.jsx"
import Skills from "./component/Skills.jsx"
import MyWork from "./component/MyWork.jsx"
import Contact from "./component/Contact.jsx"



function App() {
  const classes = useStyles()


  return (
    <div className="App">
      <Navbar />
      <About title="About Me" id="about" dark={true} />
      <Skills title="My Couding" id="skills" dark={false} />
      <MyWork title="My Works" id="works" dark={true} />
      <Contact title="Get In Touch" id="contact" dark={false} />
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App
