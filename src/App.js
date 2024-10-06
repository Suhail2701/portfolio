import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactForm from "./components/ContactForm";
import { useRef } from "react";



function App() {

  const bodyRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const formRef = useRef(null);


  return (
    <div>
        <Header aboutRef={aboutRef} skillsRef={skillsRef} bodyRef={bodyRef} eduRef={eduRef} projectRef={projectRef} experienceRef={experienceRef} formRef={formRef}/>
        <Body ref={bodyRef}/>
        <AboutMe ref={aboutRef}/>
        <Skills ref={skillsRef}/>
        <Education ref={eduRef}/>
        <Projects ref={projectRef}/>
        <ExperienceTimeline ref={experienceRef}/>
        <ContactForm ref={formRef}/>
        <Footer/>
    </div>
  );
}

export default App;
