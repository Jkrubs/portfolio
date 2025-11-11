
import { Route, Routes } from "react-router";
import { Home } from "./Components/Home/Home";
import {Work} from './Components/Work/Work'
import { Resume } from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
