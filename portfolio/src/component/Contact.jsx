import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "079a6155-0d78-468e-b94f-0c40eba45682"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully! I will get back to you soon.");
        event.target.reset();
      } else {
        alert("Something went wrong! Please try again later.");
        console.log(result);
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4 inline-block">
          Let's Connect
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative group rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(140,80,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="contact.jpg"
              alt="Contact"
              className="w-full max-w-md h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                 e.target.src = 'https://via.placeholder.com/500x600/1e1e2f/ffffff?text=Let%27s+Connect';
              }}
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(140,80,255,0.15)] relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
            Send me a message
          </h3>

          <form onSubmit={onSubmit} className="space-y-5 relative z-10">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 ${
                isSubmitting 
                ? "bg-gray-600 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-purple-500/50 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
