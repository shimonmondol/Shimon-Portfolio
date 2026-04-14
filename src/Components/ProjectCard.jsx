import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`relative rounded-2xl overflow-hidden shadow-xl ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="md:w-200 md:h-120 w-150 h-90"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* CONTENT */}
        <div
          className={`${
            isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
          }`}
        >
          <h3 className="text-3xl font-semibold text-white">{project.title}</h3>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
            >
              <Github size={18} />
              Code
            </a>

            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
