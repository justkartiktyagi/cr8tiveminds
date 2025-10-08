import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success or error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bsn06c5", // replace with your service ID
        "template_3qvn1fd", // replace with your template ID
        form.current,
        "cl5EXvYHnD0eh77hE" // replace with your public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact"className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </form>
        <div className="text-center mt-12 text-gray-700">
          <p className="text-lg font-medium">You can also reach us directly:</p>
          <p className="mt-2">
            📞 <span className="font-semibold">+91 1232 315 001</span>
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:cr8tiveminds.in@gmail.com"
              className="text-blue-600 hover:underline"
            >
              cr8tiveminds.in@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
