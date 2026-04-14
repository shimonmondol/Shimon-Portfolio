import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ifphmx8",
        "template_d7vkr73",
        formRef.current,
        "ZJq8L_juvsFhOecf-",
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully", { theme: "dark" });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong ❌", { theme: "dark" });
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="bg-[#0b0f14] py-20 sm:py-24">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-teal-400 mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl uppercase font-bold text-white leading-tight">
            Reach Out <span className="text-teal-400 ml-2">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md text-sm sm:text-base">
            Have an idea? Let’s build something amazing together
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            {/* Email */}
            <a
              href="mailto:shimonuap072@gmail.com"
              className="block w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 hover:border-teal-400"
            >
              <div className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <Mail size={20} />
                </span>
                <div>
                  <h3>Email</h3>
                  <p>shimonuap072@gmail.com</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <div className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 hover:border-teal-400 shadow-teal-400/10 hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]">
              <a
                href="https://wa.me/8801738007334"
                className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition"
              >
                <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-teal-400 backdrop-blur-lg shadow-lg">
                  <Phone size={20} />
                </span>
                <div>
                  <h3 className="text-gray-400 text-xs sm:text-sm">WhatsApp</h3>
                  <p className="text-sm sm:text-base">+880 1738-007334</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 hover:border-teal-400 shadow-teal-400/10 hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-teal-400 backdrop-blur-lg shadow-lg">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="text-gray-400 text-xs sm:text-sm">Location</h3>
                  <p className="text-sm sm:text-base">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl w-full rounded-2xl p-6 sm:p-8"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 sm:py-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@gmail.com"
                className="w-full px-4 py-3 sm:py-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Tell me about your project"
                className="w-full px-4 py-3 sm:py-4 rounded-lg bg-black/30 border border-white/10 text-white outline-none focus:border-teal-400 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 sm:py-4 rounded-lg bg-teal-400 transition text-white cursor-pointer font-medium shadow-teal-400/10 hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)]
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-teal-400"}
              `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
