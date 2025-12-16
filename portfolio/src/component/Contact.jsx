import React from "react";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "079a6155-0d78-468e-b94f-0c40eba45682"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong!");
      console.log(result);
    }
  };

  return (
    <div
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 p-8
        ">

        {/* Left Image */}
        <div className="w-full md:w-1/2 max-w-md">
          <img
            src="contact.jpg"
            alt="Contact"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 max-w-md
          bg-white/10 backdrop-blur-md
          border border-white/20 rounded-2xl p-6 hover:scale-102 duration-300
          text-white shadow-[0_0_20px_rgba(140,80,255,0.3)]">

          <h2 className="text-3xl font-bold text-center mb-6
            text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Contact Me
          </h2>

          {/* ✅ onSubmit MUST be here */}
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold
              bg-gradient-to-r from-purple-500 to-blue-500
              hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
