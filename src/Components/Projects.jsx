import projects from "../Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm  font-bold uppercase tracking-widest text-teal-400 mb-4">
          Projects
        </p>
        <h2 className="text-3xl uppercase md:text-5xl font-bold text-white leading-tight">
          My
          <span className="text-teal-400 ml-2">Works</span>
        </h2>
        <div className="grid  gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
