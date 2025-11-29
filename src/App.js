
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Resume } from "./Components/Resume/Resume";
import { Work } from "./Components/Work/Work";


import { AnimatePresence } from "framer-motion";
import Transition from "./Components/Transition/Transition";


function App() {
  const location = useLocation()
  return (
    <div className="App">

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<><Transition /><Home /></>} />
          <Route path="/work" element={<><Transition /><Work /></>} />
          <Route path="/resume" element={<><Transition /><Resume /></>} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
