import Intro from "./components/intro/Intro"
import About from "./components/about/about";
import Projects from "./components/projectList/ProjectList"
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
  </div>;
};

export default App;