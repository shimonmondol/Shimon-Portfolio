import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: <Github size={30} />,
    link: "https://github.com/shimonmondol",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={30} />,
    link: "https://www.linkedin.com/in/shimon-mondol-b92004372/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={30} />,
    link: "mailto:shimonuap072@gmail.com",
    label: "Send Email",
  },
];

const LeftSocialBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-4 bottom-4 z-50 flex flex-col items-center gap-5"
    >
      {/* Icons */}
      <div className="flex flex-col gap-4">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            aria-label={item.label}
            whileHover={{ y: -4, scale: 1.1 }}
            className="text-gray-400 hover:text-teal-400 transition"
          >
            {item.icon}
          </motion.a>
        ))}
     
        {/* <motion.a
  href="mailto:yourmail@gmail.com"
  className="mt-6 text-xs tracking-widest text-gray-400 hover:text-teal-400 transition"
  style={{ writingMode: "vertical-rl" }}
  whileHover={{ y: -4 }}
>
  yourmail@gmail.com
</motion.a> */}
      </div>

      {/* Line */}
      <div className="w-px h-24 bg-white/20 mt-2" />
    </motion.div>
  );
};

export default LeftSocialBar;
