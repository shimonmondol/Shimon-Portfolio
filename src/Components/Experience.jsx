import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Nation IT Limited",
    period: "Nov, 2023 - Jun, 2025",
    icon: <Briefcase size={26} />,
    highlights: [
      "Developed applications using React.js and Next.js ",
      "Implemented responsive layouts from Figma designs",
      "Built reusable components and integrated APIs for dynamic user experiences ",
      "Collaborated with cross-functional teams to deliver production-ready features",
    ],
  },
  {
    id: 2,
    title: "MERN Stack Internship",
    company: "Institute of Global Professionals",
    period: "Dec, 2022 - Jun 2023",
    icon: <Briefcase size={26} />,
    highlights: [
      "Built and secured RESTful APIs using Node.js & Express",
      "Managed MongoDB and PostgreSQL database",
      "Integrated secure OAuth2 third-party authentication",
      "Developed and maintained full-stack web applications using the MERN stack",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    company: "Bizbond IT Limited",
    period: "Feb, 2018 - Aug, 2020",
    icon: <Briefcase size={26} />,
    highlights: [
      "Designed and executed email marketing campaigns",
      "Planned and managed digital marketing campaigns across multiple platforms",
      "Promotional content and campaign performance",
      "Collaborated with developers to implement pixel tracking and speed enhancements"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0b0f14] py-16 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400 mb-4">
            Experience
          </p>
          <h2 className="text-3xl uppercase md:text-5xl font-bold text-white leading-tight">
            My <span className="text-teal-400 ml-2">Experience</span>
          </h2>
          <p className="max-w-2xl text-gray-400 mt-2">
            A timeline of my professional work history and development journey
          </p>
        </motion.div>

        {/* 1 Row, 3 Columns Grid Layout */}
        <div className="grid gap-8 md:grid-cols-3 items-start justify-center">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="h-fit self-start rounded-3xl border border-white/10 bg-[#0f1620] p-6 shadow-[0_0_40px_rgba(45,212,191,0.03)] hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] transition-all duration-300"
            >
              {/* Header Info */}
              <div className="flex items-start gap-4">
                <div className="text-teal-400 p-1 bg-teal-400/10 rounded-xl">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-teal-400 font-medium mt-2">
                    {exp.company}
                  </p>

                  {/* Period Tag */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Description Content - Always open */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
