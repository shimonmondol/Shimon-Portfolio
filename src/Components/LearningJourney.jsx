import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started Web Development",
    desc: "Learned HTML, CSS, and JavaScript fundamentals.",
  },
  {
    year: "2024",
    title: "React Development",
    desc: "Built reusable components and learned state management.",
  },
  {
    year: "2025",
    title: "UI/UX & Animations",
    desc: "Focused on modern UI design, Tailwind CSS, and Framer Motion.",
  },
  {
    year: "2025",
    title: "Real Projects",
    desc: "Built multiple frontend projects with clean UI and responsive layouts.",
  },
];

const LearningJourney = () => {
  return (
    <section id="journey" className="bg-[#0b0f14] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-teal-400 mb-3">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Learning & Growth
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A brief overview of my learning path and how I’ve grown as a frontend developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="md:w-1/2 px-6">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-cyan-400/40 transition">
                    <span className="text-teal-400 text-sm font-medium">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <span className="absolute left-1/2 top-6 w-4 h-4 bg-teal-400 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
