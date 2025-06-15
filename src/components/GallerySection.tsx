
import React from 'react';

const galleryImages = [
  { url: "/placeholder.svg", alt: "Modern haircut", caption: "Modern Bob" },
  { url: "/placeholder.svg", alt: "Color transformation", caption: "Balayage" },
  { url: "/placeholder.svg", alt: "Wedding hair", caption: "Bridal Updo" },
  { url: "/placeholder.svg", alt: "Highlights", caption: "Beachy Highlights" },
  { url: "/placeholder.svg", alt: "Curly style", caption: "Curls" },
  { url: "/placeholder.svg", alt: "Men's cut", caption: "Modern Fade" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-salon-rose">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-salon-dark mb-2">Gallery</h2>
        <div className="w-16 h-1 bg-salon-powderPink mx-auto mb-6 rounded"></div>
        <p className="text-salon-brown font-medium">Beauty, joy, and transformation—see what we create together.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl bg-white border border-salon-powderGrey/20 shadow hover:shadow-lg transition animate-fade-in-up">
            <div className="aspect-square w-full bg-salon-powderGrey/10">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-salon-powderPink/80 to-transparent">
              <span className="text-salon-dark font-playfair font-semibold text-lg">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block text-salon-powderPink font-bold hover:underline text-lg mt-6 transition"
        >
          View More on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default GallerySection;
