import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Layers, Database } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code2 size={26} />,
    terminal: true,
    description: [
"React applications",
      "Tailwind CSS UI design",
      "Reusable components",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server size={26} />,
    description: [
      "Node.js & Express based REST APIs",
      "Authentication & authorization systems",
      "Secure and scalable backend logic",
      "Database modeling & optimization",
    ],
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: <Layers size={26} />,
    description: [
      "End-to-end web application development",
      "Frontend & backend integration",
      "Deployment & environment configuration",
      "Maintenance & long-term support",
    ],
  },
  {
    id: 4,
    title: "API Integration",
    icon: <Database size={26} />,
    description: [
      "Third-party API integrations",
      "Custom REST API development",
      "Efficient data handling",
      "API testing & documentation",
    ],
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="bg-[#0b0f14] py-32 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
        <p className="text-sm  font-bold uppercase tracking-widest text-teal-400 mb-4">
          Services
          </p>

          <h2 className="text-3xl uppercase md:text-5xl font-bold text-white leading-tight">
            My
           
              <span className="text-teal-400 ml-2">services</span>
          </h2>
          <p className="max-w-2xl text-gray-400">
            I deliver high-quality web development services with a strong
            focus on performance, scalability, and user experience.
          </p>
        </motion.div>

        {/* 🔥 IMPORTANT FIX HERE */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => toggle(service.id)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 180 }}
              className={`
                h-fit self-start
                cursor-pointer
                rounded-3xl
                border border-white/10
                bg-[#0f1620]
                p-6
                hover:border-teal-400
                hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition
                ${
                  activeId === service.id
                    ? "shadow-[0_0_40px_rgba(45,212,191,0.15)]"
                    : ""
                }
              `}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="text-teal-400">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
             
                     
                      <ul className="mt-6 space-y-3 text-gray-400">
                        {service.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
