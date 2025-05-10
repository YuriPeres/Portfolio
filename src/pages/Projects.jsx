import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../assets/database/ProjectsList";

function Projects() {
    return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </section>
    )
  }
  
  export default Projects
  