import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  setIsSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Email sending failed:", error);

    alert("Failed to send message. Please try again.");
  } finally {
    setIsSending(false);
  }
}

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question, idea, or opportunity?
            Feel free to send me a message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="6"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg outline-none focus:border-blue-500 transition-colors resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;