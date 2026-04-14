
import About from "./Components/About"
import Contact from "./Components/Contact"
import FloatingActions from "./Components/FloatingAction"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import LeftSocialBar from "./Components/LeftSocialBar"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import ScrollProgress from "./Components/ScrollProgress"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import TechStack from "./TechStack"


function App() {

  return (
    <>
    
 <LeftSocialBar></LeftSocialBar>
    <ScrollProgress></ScrollProgress>
    <FloatingActions></FloatingActions>
       <Navbar></Navbar>
     <Hero></Hero>
     <TechStack></TechStack>
       <About></About>
     <Skills></Skills>
     <Services></Services>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default App
