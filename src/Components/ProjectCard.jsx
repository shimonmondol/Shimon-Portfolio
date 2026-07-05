import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-20 w-full px-4"
    >
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
          isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.04, rotate: isEven ? -1 : 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video w-full lg:w-1/2 bg-neutral-primary-soft p-2 border border-default/40 group"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-semibold text-heading tracking-tight mb-4 hover:text-neutral-tertiary-medium transition-colors duration-300 cursor-pointer">
              {project.title}
            </h3>

            {/* Render as bullet points if description is an array, otherwise render as text */}
            {Array.isArray(project.description) ? (
              <ul className="list-disc list-outside pl-5 text-body text-base lg:text-lg leading-relaxed mb-8 max-w-xl opacity-90 space-y-2">
                {project.description.map((point, idx) => (
                  <li key={idx} className="marker:text-teal-400">
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-body text-base lg:text-lg leading-relaxed mb-8 max-w-xl opacity-90">
                {project.description}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)] hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
              >
                <Github size={18} className="animate-pulse" />
                <span>Github</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)] hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
              >
                <Globe size={18} className="animate-pulse" />
                <span>Live</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;