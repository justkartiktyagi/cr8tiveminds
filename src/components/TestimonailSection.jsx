import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Kartik Tyagi",
    company: "Opulent & Co",
    feedback:
      "Cr8tive Minds transformed our online presence with a stunning website design!",
    avatar: "/testimonials/kartik.jpg",
  },
  {
    name: "Bob Smith",
    company: "Beta Solutions",
    feedback: "Excellent design and seamless communication. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 mt-2">
          Testimonials from some of our valued clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonial.name}
            </h3>
            <span className="text-gray-500 text-sm">{testimonial.company}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
