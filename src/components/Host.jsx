import React from "react";
import sn from "../assets/sn.png"; 
export default function Host() {
  return (
    <section id="host" className="pb-10  px-4 bg-bg text-center">
      
      <div className="max-w-2xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
          निमंत्रक
        </h2>

        {/* Names */}
        <div className="border-t border-b border-gray-300 py-4">
          <p className="text-lg font-marathi md:text-xl text-text leading-relaxed">
            सौ. लक्ष्मीबाई व श्री. श्रावण गंभीर चौधरी <br/>
सौ. किरण व श्री. सुकदेव श्रावण चौधरी <br/>
सौ. सुरेखा व श्री. सुनील श्रावण चौधरी <br/>
सौ. सुनीता व श्री. ज्ञानेश्वर श्रावण चौधरी <br/>
सौ. ज्योती व श्री. दिलीप श्रावण चौधरी <br/>
चि. राज सुकदेव चौधरी 
          </p>
        </div>

        {/* Optional Line */}
        <p className="mt-6 font-marathi text-text">
          आपल्या उपस्थितीने आणि शुभेच्छांनी हा आनंदाचा क्षण अधिक सुंदर करावा, ही विनंती.
        </p>

      </div>
       <div className="flex justify-center leading-none">
        <img
          src={sn}
          alt="decoration"
          className="w-40 md:w-64 lg:w-80 h-auto object-contain block"
        />
      </div>

    </section>
  );
}