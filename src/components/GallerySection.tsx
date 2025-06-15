
import React from 'react';

const galleryImages = [
  { 
    url: "/placeholder.svg",
    alt: "Elegant haircut",
    caption: "Modern Bob"
  },
  { 
    url: "/placeholder.svg",
    alt: "Colorful hair transformation",
    caption: "Vibrant Balayage"
  },
  { 
    url: "/placeholder.svg",
    alt: "Wedding hairstyle",
    caption: "Bridal Updo"
  },
  { 
    url: "/placeholder.svg",
    alt: "Blonde highlights",
    caption: "Beachy Highlights"
  },
  { 
    url: "/placeholder.svg",
    alt: "Curly hairstyle",
    caption: "Defined Curls"
  },
  { 
    url: "/placeholder.svg",
    alt: "Men's haircut",
    caption: "Modern Fade"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-salon-peach/50 via-salon-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-dark">Our Gallery</h2>
          <div className="w-20 h-1 bg-salon-orange mx-auto mb-6 rounded-lg"></div>
          <p className="text-salon-brown max-w-xl mx-auto font-medium">See the beautiful results of our artistry and hospitality!</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-salon-peach"
            >
              <div className="aspect-square bg-salon-light">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-salon-brown/80 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-xl font-bold font-playfair">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center text-salon-orange hover:text-salon-gold font-semibold transition-colors"
          >
            View More on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
