import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bgHero.jpg";
import ganesha from "../assets/ganesha.png";
import naral from "../assets/naral.png";
import music from "../assets/music/bgmusic.mp3";
import vajantri1 from "../assets/vajantri1.png";
import vajantri from "../assets/vajantri2.png";

export default function Hero() {
  const weddingDate = new Date("2026-04-26T00:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Format (01, 02 style)
  const format = (num) => String(num).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      // ✅ Calendar Days Fix
      const nowDate = new Date();
      const eventDate = new Date("2026-04-26");

      nowDate.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);

      const dayDiff = eventDate - nowDate;
      const days = Math.ceil(dayDiff / (1000 * 60 * 60 * 24));

      // ✅ Exact Time Countdown
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: days,
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center text-white overflow-hidden pt-28"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), #4a3102),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100dvh",
        transform: "translateZ(0)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Ganesh Top */}
      <motion.div
        className="relative z-20 flex flex-col items-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={ganesha}
          alt="Ganesh"
          className="w-14 sm:w-16 md:w-20 mb-1"
        />
        <p className="text-yellow-200 text-xs sm:text-sm md:text-base font-marathi tracking-wider">
          || श्री गणेशाय नमः ||
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Groom */}
        <motion.div
          className="flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-sm font-marathi">चि.</span>
          <span className="text-3xl font-ganesh sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-tight">
            चेतन
          </span>
          <span className="text-sm font-marathi opacity-90">( रोहित )</span>
        </motion.div>

        {/* Naral */}
        <motion.img
          src={naral}
          alt="Naral"
          className="w-14 sm:w-16 md:w-20 lg:w-24 h-auto"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Bride */}
        <motion.div
          className="flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-sm font-marathi">चि.सौ.का.</span>
          <span className="text-3xl font-ganesh sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-tight">
            लीना
          </span>
        </motion.div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="relative z-20 text-sm sm:text-base text-primary font-marathi md:text-lg mt-6 px-4 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        आमच्या संसाराच्या नव्या सुरुवातीला तुमचे स्वागत आहे
      </motion.p>

      {/* Date */}
      <motion.p
        className="relative z-20 font-marathi text-primary sm:text-lg md:text-xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        २६ एप्रिल २०२६
      </motion.p>

      {/* Countdown */}
      <motion.div
        className="relative z-20 mt-6 flex gap-4 text-center  backdrop-blur-md rounded-md py-2 px-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit}>
            <p className="text-sm font-semibold">
              {format(timeLeft[unit])}
            </p>
            <span className="text-[10px] opacity-80">
              {unit === "days"
                ? "दिवस"
                : unit === "hours"
                ? "तास"
                : unit === "minutes"
                ? "मि."
                : "से."}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Decorations */}
      <motion.img
        src={vajantri1}
        className="absolute bottom-4 left-0 w-16 z-20"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
      <motion.img
        src={vajantri}
        className="absolute bottom-4 right-0 w-16 z-20"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      />

      <audio src={music} autoPlay loop />
    </section>
    
  );
}