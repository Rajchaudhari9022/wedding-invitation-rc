import React, { useState } from "react";

// ✅ IMPORT IMAGES
import photo1 from "../assets/gallery/photo1.jpg";
import photo2 from "../assets/gallery/photo2.jpg";
import photo3 from "../assets/gallery/photo3.jpg";
import photo4 from "../assets/gallery/photo4.jpg";
import photo5 from "../assets/gallery/photo5.jpg";
import photo6 from "../assets/gallery/photo6.jpg";
import photo7 from "../assets/gallery/photo7.jpg";
import photo8 from "../assets/gallery/photo8.jpg";
import photo9 from "../assets/gallery/photo9.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const leftImages = [photo1, photo2, photo3, photo4];
  const rightImages = [photo5, photo6, photo7, photo8];
  const centerImage = photo9;

  return (
    <section className="bg-bg  pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">


        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          आमचे सुंदर क्षण
        </h2>
        
        

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left Images */}
          <div className="grid grid-cols-2 gap-6">
            {leftImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="Wedding"
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            className="overflow-hidden rounded-3xl shadow-2xl cursor-pointer bg-white"
            onClick={() => setSelectedImage(centerImage)}
          >
            <img
              src={centerImage}
              alt="Highlight"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-6">
            {rightImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt="Wedding"
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Prevent close when clicking image */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-5 -right-5 bg-white/20 backdrop-blur-md 
                         text-white w-10 h-10 flex items-center justify-center 
                         rounded-full text-xl hover:bg-secondary transition"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}