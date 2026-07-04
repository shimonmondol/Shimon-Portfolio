import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#0b0f14] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* বাম পাশের টেক্সট */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400 mb-4">
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
            reusable components, and small details that make a big difference in
            user experience.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed max-w-xl text-justify">
            Outside of coding, I enjoy exploring creative activities like
            sketching UI ideas, reading tech blogs, and spending time on hobbies
            that help me reset — whether that’s listening to music, watching
            documentaries, or light outdoor activities. These moments help me
            stay inspired and focused.
          </p>
        </motion.div>

        {/* ডান পাশের গ্লাস কার্ডসমূহ */}
        {/* পরিবর্তন: এখানে 'flex flex-col gap-6' দেওয়া হয়েছে যাতে কার্ডগুলো উপর-নিচ থাকে */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6 mt-20"
        >
          {[
            {
              status: "Education",
              degree: "B.Sc in Electrical & Electronics Engineering",
              university: "University Of Asia Pacific",
            },
            {
              title: "My Journey",
              desc: "My journey evolved from basic web fundamentals to building dynamic, real-world applications. Moving forward, my goal is to deepen my expertise in architectural patterns, optimize performance, and engineer impactful.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-teal-400 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_10px_rgba(20,184,166,0.15)]"
            >
              {item.status && (
                <h3 className="text-white font-semibold text-3xl">
                  {item.status}
                </h3>
              )}
              {item.degree && (
                <p className="text-white font-normal text-xl mt-3 leading-snug">
                  {item.degree}
                </p>
              )}
              {item.university && (
                <p className="text-white font-normal text-xl mt-3">
                  {item.university}
                </p>
              )}

              {item.title && (
                <h3 className="text-white font-semibold text-2xl">
                  {item.title}
                </h3>
              )}
              {item.desc && (
                <p className="text-gray-400 text-md mt-3 leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
