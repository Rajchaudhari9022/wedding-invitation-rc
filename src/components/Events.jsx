import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";



export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="pb-16 px-4 text-center bg-bg">



      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
        लग्नाचे कार्यक्रम
      </h2>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Mehendi */}
        <motion.div
          className="p-6 bg-bg_green rounded-xl shadow hover:scale-105 transition"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            scale: isInView ? 1 : 0.97,
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <h3 className="text-3xl font-marathi font-semibold text-green underline decoration-2 underline-offset-8">
            संगीत/मेहंदी
          </h3>
          <p className="text-xl mt-2 font-marathi  text-gray-700">शुक्रवार, २४ एप्रिल २०२६</p>
        </motion.div>

        {/* Haldi */}
        <motion.div
          className="p-6 bg-bg_yellow rounded-xl shadow hover:scale-105 transition"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            scale: isInView ? 1 : 0.97,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <h3 className="text-3xl font-marathi font-semibold text-yellow underline decoration-2 underline-offset-8">
            हळद
          </h3>
          <p className="text-xl font-marathi mt-2 text-gray-700">शनिवार, दि. २५ एप्रिल २०२६ रोजी</p>
          <p className="text-xl font-marathi mt-2 text-gray-700">

            दु. ४.०० वा. राहते घरी गणपती नगर, प्लॉट नं. १

            बोहरा स्कुल जवळ पारोळा.</p>
        </motion.div>

      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 max-w-4xl mx-auto pt-6">
        <motion.div
          className="p-6 bg-bg_red rounded-xl shadow hover:scale-105 transition"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
            scale: isInView ? 1 : 0.97,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          
          <h3 className="text-3xl font-marathi font-semibold text-red underline decoration-2 underline-offset-8">
            लग्न
          </h3>

          <p className="text-xl font-marathi mt-2 text-gray-700"> रविवार, दि. २६ एप्रिल २०२६ रोजी दु.१२:२४ वा.</p>
          <p className="text-xl font-marathi mt-2 text-gray-700">स्थळ - लक्ष्मी नारायण लॉन्स, लक्ष्मी नारायण नगर, साक्री बायपास रोड, धुळे</p>
        

       
        </motion.div>

      </div>

    </section>
  );
}