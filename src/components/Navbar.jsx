import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
      setMobileDropdown(null);
    }
  };

  const menuItems = [
    { name: "मुख्यपृष्ठ", id: "hero" },
    {
      name: "कुटुंब",
      dropdown: [
        { name: "आमचे कुटुंब", id: "ourfamily" },
        { name: "निमंत्रक", id: "host" },
      ],
    },
    { name: "कार्यक्रम", id: "events" },
   
      
      
    { name: "फोटो", id: "gallery" },
        
    
    
    { name: "संपर्क", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-bg" : "bg-bg"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className="text-xl md:text-2xl font-bold cursor-pointer text-primary"
          onClick={() => handleScrollTo("hero")}
        >
          R & L
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group py-2">
              {!item.dropdown ? (
                <span
                  onClick={() => handleScrollTo(item.id)}
                  className="cursor-pointer text-primary hover:text-secondary font-semibold"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <span className="text-primary font-semibold cursor-pointer">
                    {item.name} ▾
                  </span>

                  <div className="absolute left-0 top-full bg-white shadow-lg rounded-lg 
                                  opacity-0 invisible group-hover:opacity-100 
                                  group-hover:visible transition duration-300 
                                  min-w-[180px]">
                    {item.dropdown.map((sub) => (
                      <p
                        key={sub.id}
                        onClick={() => handleScrollTo(sub.id)}
                        className="px-4 py-2 hover:bg-amber-50 cursor-pointer"
                      >
                        {sub.name}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>


        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg shadow-md px-6 py-4 space-y-3">
          {menuItems.map((item) =>
            !item.dropdown ? (
              <p
                key={item.name}
                onClick={() => handleScrollTo(item.id)}
                className="py-2 hover:text-secondary cursor-pointer font-semibold text-primary"
              >
                {item.name}
              </p>
            ) : (
              <div key={item.name}>
                <div
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.name ? null : item.name
                    )
                  }
                  className="flex justify-between items-center py-2 border-b cursor-pointer font-semibold text-primary"
                >
                  {item.name}
                  <span>
                    {mobileDropdown === item.name ? "−" : "+"}
                  </span>
                </div>

                {mobileDropdown === item.name && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.dropdown.map((sub) => (
                      <p
                        key={sub.id}
                        onClick={() => handleScrollTo(sub.id)}
                        className="cursor-pointer text-primary hover:text-white"
                      >
                        {sub.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}
