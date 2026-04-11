import React, { useEffect, useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="container nav">
        <h1 className="logo">The British Museum</h1>

        <nav className={`nav-links${isNavOpen ? " active" : ""}`} id="navLinks">
          <a href="#visit">Visit</a>
          <a href="#exhibitions">Exhibitions</a>
          <a href="#collection">Collection</a>
          <a href="#support">Support</a>
        </nav>

        <button
          className="menu-btn"
          id="menuBtn"
          type="button"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;

