import { useState, useCallback, useMemo} from 'react'
import ProjectForm from "./components/ProjectForm"
import SearchBar from "./components/SearchBar"
import ProjectList from "./components/ProjectList"
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    {id: 1, title: "Project 1", description: "Description of the project" },
    {id: 2, title: "Project 2", description: "Description of the project" },
    {id: 3, title: "Project 3", description: "Description of the project" } 
  ])
  const[searchTerm, setSearchTerm] = useState("")

//Adding a new project
const addProject = useCallback(({ title, description }) => {
    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    }
    setProjects(prevProjects => [...prevProjects, newProject])
  }, [])

  //filter projects based on search term
  const filterProjects = useMemo(() => {
    if (!searchTerm.trim()) return projects

    const lowerSearch = searchTerm.toLowerCase()
    return projects.filter(project =>
      project.title.toLowerCase().includes(lowerSearch) ||
      project.description.toLowerCase().includes(lowerSearch)
    )
  }, [projects, searchTerm])

  const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(searchTerm.toLowerCase())
)


  return (
    <div className="container">
      <h1>Personal Project Showcase App</h1>
      
      <ProjectForm onAddProject={addProject} />
      
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <ProjectList projects={filteredProjects} />
      
      {/* Debug info - only shows in development */}
      {import.meta.env.DEV && (
        <div className="debug-info">
          Debug: {filteredProjects.length} projects shown | 
          Search: "{searchTerm}" | 
          Total: {projects.length} projects
        </div>
      )}
    </div>
  )
}

export default App;