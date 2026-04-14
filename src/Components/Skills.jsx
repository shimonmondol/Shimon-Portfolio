import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "JavaScript",
        percent: 85,
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      },
      {
        name: "React",
        percent: 88,
        icon: "https://cdn-icons-png.flaticon.com/128/15484/15484268.png",
      },
      {
        name: "NextJS",
        percent: 85,
        icon: "https://i.ibb.co.com/ksZ8sRxF/nextjs-icon-dark-background.png",
      },
      {
        name: "HTML5",
        percent: 95,
        icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
      },
      {
        name: "CSS3",
        percent: 90,
        icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
      },
      {
        name: "Tailwind CSS",
        percent: 92,
        icon: "https://i.ibb.co.com/27Mj8g12/OIP-1-removebg-preview.png",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Node.js",
        percent: 85,
        icon: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png",
      },
      {
        name: "Express.js",
        percent: 80,
        icon: "https://i.ibb.co.com/wFzmVdJT/download-1.png",
      },
      {
        name: "MongoDB",
        percent: 75,
        icon: "https://i.ibb.co.com/8nhYWct5/mongodb-logo-icon-170943.webp",
      },
      {
        name: "Firebase",
        percent: 70,
        icon: "https://i.ibb.co.com/SwFDy5q9/OIP-3-removebg-preview.png",
      },
      {
        name: "Postman",
        percent: 80,
        icon: "https://i.ibb.co.com/kgFJ3jqL/postman-icon.webp",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "VS Code",
        percent: 95,
        icon: "https://cdn-icons-png.flaticon.com/128/906/906324.png",
      },
      {
        name: "GitHub",
        percent: 90,
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968866.png",
      },
      {
        name: "Netlify",
        percent: 90,
        icon: "https://i.ibb.co.com/TMYMN46W/images-removebg-preview-1.png",
      },
      {
        name: "Vercel",
        percent: 80,
        icon: "https://i.ibb.co.com/xNbjRm7/images-1-removebg-preview.png",
      },
      {
        name: "Render",
        percent: 80,
        icon: "https://i.ibb.co.com/nsLZMxRw/images.png",
      },
      {
        name: "Figma",
        percent: 82,
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0b0f14] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm  font-bold uppercase tracking-widest text-teal-400 mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Tech <span className="text-teal-400">Proficiency</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A Breakdown of My Core Development Strengths
          </p>
        </div>
        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#101720] p-6 rounded-2xl border border-teal-500/10 
              hover:border-teal-400
              shadow-[0_0_25px_rgba(45,212,191,0.2)]
              transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-teal-400">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={skill.icon}
                        className="w-10 h-10  object-contain"
                        alt={skill.name}
                      />
                      <p className="text-md">{skill.name}</p>
                      <span className="ml-auto text-teal-400">
                        {skill.percent}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-white/10 rounded-md overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-teal-400 rounded-md"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
