import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Family from "./components/Family";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Host from "./components/Host";

export default function App() {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Sections */}
      <div >
        <section id="hero">
          <Hero />
        </section>

        <section id="family">
          <Family />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="gallery">
          <Gallery />
        </section>
        <section id="host">
          <Host />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}