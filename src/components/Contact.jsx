import React from "react";
import smallImg from "../assets/smallImg.png"; // ✅ your PNG image
import { FaInstagram, FaFacebook, } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="bg-bg pb-7 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            संपर्क माहिती
          </h2>
          <p className="text-text font-marathi mt-4 text-lg">
            कार्यक्रमासंदर्भात अधिक माहितीसाठी कृपया खालील तपशील पहा.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Contact Details */}
          <div className="space-y-10">

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                लग्न स्थळ
              </h3>
              <p className="text-text font-marathi text-lg">
                लक्ष्मी नारायण लॉन्स, लक्ष्मी नारायण नगर, साक्री बायपास रोड, धुळे
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                दिनांक
              </h3>
              <p className="text-text font-marathi text-lg">
                रविवार, दि. २६ एप्रिल २०२६
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                संपर्क क्रमांक
              </h3>
              <p className="text-text font-marathi text-lg">
               +९१ ९०२२२६२१५९<br />
               +९१ ९७६६१८०१३१
              </p>
            </div>

            <div className=" pl-6">
  

  {/* Social Media */}
  <div className="flex gap-4 mt-4">
    
    {/* Instagram */}
    <a
      href="https://www.instagram.com/rjchaudhari_?igsh=MTNsY2x4aGdxNDI4ZQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-600 text-xl hover:scale-110 transition"
    >
      <FaInstagram />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/rj.chaudhari.3150?mibextid=rS40aB7S9Ucbxw6v"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-xl hover:scale-110 transition"
    >
      <FaFacebook />
    </a>
    <a href="mailto:rajchaudhari9022@gmail.com" className="flex text-white text-xl hover:scale-110 transition">
  <FaEnvelope />

</a>
    

   

  </div>

</div>

          </div>

          {/* Right - Map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.836480345246!2d74.747482!3d20.8943935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5c5da3b1887%3A0xe1d2c65e14315c12!2sLaxminarayan%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v0000000000000"
              className="w-full h-[400px] border-0"
              loading="lazy"
            ></iframe>

            <div className="p-6 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Laxminarayan+Mangal+Karyalay+Dhule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-marathi bg-bg hover:bg-secondary text-primary px-8 py-3 rounded-md transition"
              >
                दिशा पाहण्यासाठी येथे क्लिक करा
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ✅ Bottom Small PNG Image */}
     <div className="flex pt-4 justify-center leading-none">
  <img
    src={smallImg}
    alt="decoration"
    className="w-full max-w-xl h-auto object-contain opacity-70  block"
  />
</div>

    </section>
  );
}