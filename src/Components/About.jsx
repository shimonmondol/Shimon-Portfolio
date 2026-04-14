import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#0b0f14] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
           <p className="text-sm  font-bold uppercase tracking-widest text-teal-400 mb-4">
            About
          </p>

          <h2 className="text-3xl uppercase md:text-5xl font-bold text-white leading-tight">
            About
           
              <span className="text-teal-400 ml-2">Me</span>
          </h2>

          

          <p className="text-gray-400 mt-6 leading-relaxed max-w-xl text-justify">
            My journey into programming started with curiosity — I wanted to
            understand how websites actually work behind the scenes. What began
            as simple HTML and CSS experiments quickly grew into a passion for
            building interactive user interfaces using JavaScript and React.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify">
            I enjoy working on frontend projects where design meets logic.
            Transforming UI designs into responsive, smooth, and accessible
            experiences is the part I love most. I care deeply about clean code,
            reusable components, and small details that make a big difference
            in user experience.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify">
            Outside of coding, I enjoy exploring creative activities like
            sketching UI ideas, reading tech blogs, and spending time on
            hobbies that help me reset — whether that’s listening to music,
            watching documentaries, or light outdoor activities. These moments
            help me stay inspired and focused.
          </p>
        </motion.div>

        {/* RIGHT GLASS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            {
              title: "My Journey",
              desc: "Started with basic web fundamentals and evolved into building real-world React applications.",
            },
            {
              title: "What I Enjoy",
              desc: "Creating clean UI, smooth interactions, and responsive layouts.",
            },
            {
              title: "My Toolkit",
              desc: "React, Tailwind CSS, MongoDB, Node.js, Express.js, Firebase .",
            },
            {
              title: "Beyond Coding",
              desc: "Exploring creativity, learning new things, and staying curious.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-teal-400  hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
            >
              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
