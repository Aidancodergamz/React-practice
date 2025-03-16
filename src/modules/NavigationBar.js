import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div 
        className={`hamburger ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? "active" : ""}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
