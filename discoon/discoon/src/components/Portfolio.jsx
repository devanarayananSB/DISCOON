import { useEffect } from "react";
import mixitup from "mixitup";

const projects = [
  { title: "Logo Design", category: "branding", img: "/assets/logo1.jpg" },
  { title: "UI/UX Dashboard", category: "uiux", img: "/assets/ui1.jpg" },
  { title: "Motion Ad", category: "motion", img: "/assets/motion1.gif" },
  { title: "Video Edit", category: "video", img: "/assets/video1.jpg" },
];

export default function Portfolio() {
  useEffect(() => {
    mixitup(".portfolio-gallery");
  }, []);

  return (
    <section className="py-16 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-glow mb-10 text-center">
        Our Works
      </h2>

      <div className="text-center mb-6">
        <button className="mx-2 mixitup-control" data-filter="all">All</button>
        <button className="mx-2 mixitup-control" data-filter=".branding">Branding</button>
        <button className="mx-2 mixitup-control" data-filter=".uiux">UI/UX</button>
        <button className="mx-2 mixitup-control" data-filter=".motion">Motion</button>
        <button className="mx-2 mixitup-control" data-filter=".video">Video</button>
      </div>

      <div className="portfolio-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className={`mix ${p.category} rounded-2xl overflow-hidden hover:scale-105 transition`}>
            <img src={p.img} alt={p.title} className="w-full h-60 object-cover" />
            <div className="p-3 bg-[#111]">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
