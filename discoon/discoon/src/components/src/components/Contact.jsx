export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-glow mb-6">Let's Work Together</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <input type="text" placeholder="Your Name" className="w-full p-3 bg-transparent border border-glow rounded-xl focus:outline-none focus:ring-2 focus:ring-glow"/>
        <input type="email" placeholder="Your Email" className="w-full p-3 bg-transparent border border-glow rounded-xl focus:outline-none focus:ring-2 focus:ring-glow"/>
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 bg-transparent border border-glow rounded-xl focus:outline-none focus:ring-2 focus:ring-glow"></textarea>
        <button type="submit" className="px-6 py-3 bg-glow text-black font-bold rounded-xl hover:shadow-[0_0_20px_#FFD700] transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
