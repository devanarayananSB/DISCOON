import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-8 md:px-24 text-center">
      <motion.h2
        className="text-4xl font-bold text-glow mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We are <span className="text-glow">Discoon</span>, a creative studio
        specializing in graphic design, video editing, and visual storytelling.
        Our philosophy is simple — <strong>Designs That Speak</strong>. We blend
        creativity and technology to craft visuals that leave a mark.
      </motion.p>
    </section>
  );
}
