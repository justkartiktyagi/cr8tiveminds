import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Beautiful, high-performing websites.",
      icon: "💻",
    },
    {
      title: "Branding & Identity",
      desc: "Memorable brand building.",
      icon: "🎨",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive, smooth experiences.",
      icon: "🧠",
    },
    {
      title: "Digital Strategy",
      desc: "Remote-first growth tactics.",
      icon: "🚀",
    },
    {
      title: "Content & Social",
      desc: "Engaging content that converts.",
      icon: "📱",
    },
  ];

  return (
    <section id="services" className="bg-white py-35 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-700 mt-2">
          We bring ideas to life through design & code.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] sm:min-w-[350px] md:min-w-[380px] bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 mb-6"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
