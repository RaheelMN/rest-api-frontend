import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Hom } from "./components/Hom";
import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";
import { SkillProvider } from "./components/SkillContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/skills/create">Add Skill</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Hom />} />
            <Route path="/skills" element={<SkillIndex />} />
            <Route path="/skills/create" element={<SkillCreate />} />
            <Route path="/skills/:id/edit" element={<SkillEdit />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </SkillProvider>
  );
}

export default App;
