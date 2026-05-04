import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Family() {
  const ref = useRef(null);

  // 🔥 change here (once: false)
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="ourfamily"
      ref={ref}
      className="pb-16 bg-bg text-center px-4"
    >
     
 {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-primary">
        आमचे कुटुंब
        </h2>
 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Groom */}
        <motion.div
          className="bg-primary p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-base font-marathi text-sm">चि.</span>
          <h3 className="text-3xl font-tagline md:text-5xl font-semibold text-bg">
               चेतन
          </h3>
          <p className="text-bg font-marathi text-lg">श्री. दादासो श्रावण गंभीर चौधरी यांचे नातू</p>
          <p className="text-bg font-marathi text-lg">सौ. किरण व श्री. सुकदेव श्रावण चौधरी </p>
          <p className="text-bg font-marathi text-lg mt-4 font-medium">यांचे जेष्ठ चिरंजिव रा.इटवे, ह.मु.पारोळा, जि.जळगांव.</p>
        </motion.div>

        {/* Bride */}
        <motion.div
          className="bg-primary p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-base font-marathi text-sm">चि.सौ.का.</span>
          <h3 className="text-3xl font-tagline md:text-5xl font-semibold text-bg">
             लीना
          </h3>
          <p className="text-bg font-marathi text-lg">कै. वासुदेव दौलत बागुल यांची नात</p>
          <p className="text-bg font-marathi text-lg">सौ. रुपाली व श्री. नितीन वासुदेव बागुल </p>
          <p className="text-bg font-marathi text-lg mt-4 font-medium">यांची सुकन्या रा.धुळे, जि.धुळे.</p>
        </motion.div>

      </div>
    </section>
  );
}