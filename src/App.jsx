import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";
console.log(import.meta.env.VITE_API_BASE_URL)

function App() {
  const [projects, setProjects] = useState([]);

  // fetch all project when component first render
  useEffect(() => {
    // fetch all projects
    const fetchProjects = async () => {
      // const res = await fetch("http://localhost:4000/api/projects/");
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/projects/`);
      const projectsData = await res.json();
      console.log(projectsData);
      setProjects(projectsData.projects);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route
          path="/projects"
          element={
            <ProjectsPage projects={projects} setProjects={setProjects} />
          }
        />

          <Route path="/projects/:id" element={<ProjectDetails projects={projects} setProjects={setProjects}/>}/>
      </Routes>
    </>
  );
}

export default App;


