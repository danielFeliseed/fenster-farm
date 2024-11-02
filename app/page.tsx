import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/farm5.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl font-bold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Fenster Farm</h1>
          <p className="max-w-2xl mt-4 text-lg sm:text-xl" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" }}>
            At Fenster Farm, we bring you the best in hydroponic farming. Dive into a world of crisp lettuce, vibrant microgreens, aromatic herbs, and farm-fresh eggs. Our innovative techniques ensure that you enjoy the freshest and healthiest produce, straight from our farm to your table.
          </p>
        </div>
      </section>

      {/* About Our Farm Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInVariants}
        className="py-20 px-8 sm:px-20"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-black">About Our Farm</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg">
          Fenster Farm is dedicated to sustainable and innovative hydroponic farming. Our focus is on providing fresh, high-quality produce while using water-efficient and soil-less techniques. We grow everything indoors, ensuring year-round availability and reduced environmental impact.
        </p>
      </motion.section>

      {/* What We Grow Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInVariants}
        className="py-20 px-8 sm:px-20"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-black">What We Grow</h2>
        <div className="grid gap-10 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Lettuce", image: "/farm5.jpg", description: "Fresh, crisp, and packed with nutrients.", link: "/products/lettuce" },
            { name: "Microgreens", image: "/farm5.jpg", description: "Small greens with a big punch of flavor.", link: "/products/microgreens" },
            { name: "Herbs", image: "/farm5.jpg", description: "Aromatic herbs to elevate any dish.", link: "/products/herbs" },
          ].map((product, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
            >
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-black">{product.name}</h3>
                <p>{product.description}</p>
                <Link href={product.link} className="btn btn-black mt-4">
                  See More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits of Hydroponic Farming Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideInVariants}
        className="py-20 px-8 sm:px-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-black">Benefits of Hydroponic Farming</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-700 text-lg space-y-4">
          <p>Hydroponic farming uses up to 90% less water than traditional soil farming, making it incredibly efficient and sustainable.</p>
          <p>Our controlled environment ensures that our plants are safe, pesticide-free, and grown under optimal conditions.</p>
          <p>With hydroponic farming, we can grow food year-round, providing fresh produce even during the off-season.</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border py-6 mt-12 text-center text-black">
        <p>© 2024 Fenster Farm | All Rights Reserved</p>
      </footer>
    </div>
  );
}
