import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Arch from "../components/Arch";
import Project from "../components/Project";
import Edu from "../components/Edu";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/edu' element={<Edu />} />
        <Route path='/arch' element={<Arch />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
