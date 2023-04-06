


import  {makeStyles}  from '@material-ui/core';
import About from './component/About'
import Contact from './component/Contact'
import MyWork from './component/MyWork'
import Navbar from './component/Navbar'
import Skills from './component/Skills'


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
