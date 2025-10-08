import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Website Design",
    description: "Responsive and high-performing website.",
    client: "Acme Corp",
    image: "https://picsum.photos/400/300?random=1",
    link: "/projects/modern-website-design",
  },
  {
    title: "Brand Identity",
    description: "Complete branding solution including logo and typography.",
    client: "Beta Solutions",
    image: "https://picsum.photos/400/300?random=2",
    link: "/projects/brand-identity",
  },
  {
    title: "Mobile App UI/UX",
    description: "Intuitive interface and smooth user experience for app.",
    client: "Gamma Tech",
    image: "https://picsum.photos/400/300?random=3",
    link: "/projects/mobile-app-uiux",
  },
  {
    title: "Digital Marketing Campaign",
    description:
      "Increased engagement and conversions for an e-commerce brand.",
    client: "Delta Co",
    image: "https://picsum.photos/400/300?random=4",
    link: "/projects/digital-marketing-campaign",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
        <p className="text-gray-700 mt-2">
          A showcase of our best work and happy clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link} // ready to link to project page
            className="relative block rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm mb-2">
                {project.description}
              </p>
              <span className="text-gray-300 text-xs">{project.client}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
