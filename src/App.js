
import { About } from "./components/about";
import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Hero from "./components/hero";
import { Hire } from "./components/hire";
import { Projects } from "./components/projects";
import { Services } from "./components/services";



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <Contacts/>
      <Hire/>
      <Footer/>
      
    </div>
  );
}

export default App;
