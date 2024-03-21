import { About } from "./components/about";
import { Header } from "./components/header";
import Hero from "./components/hero";
import { Featured } from "./components/featured";
import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Featured/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
