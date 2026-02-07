// Example: How to use PWA components in your App

// File: src/App.js (Updated Example)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import PWA Indicator
import OfflineIndicator from "./components/OfflineIndicator/OfflineIndicator";

// Import your existing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      {/* PWA Offline Indicator - Shows when user is offline */}
      <OfflineIndicator />

      {/* Your existing app structure */}
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

// ============================================
// File: src/components/Header/Header.jsx (Updated Example)
// ============================================

import React from "react";
import { Link } from "react-router-dom";
import PWAInstallButton from "../PWAInstallButton/PWAInstallButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">Prakash</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className="nav-actions">
          {/* PWA Install Button - Shows when app is installable */}
          <PWAInstallButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;

// ============================================
// File: Example CSS for Header with Install Button
// ============================================

/*
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #1890ff;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
    flex-basis: 100%;
    order: 3;
  }
}
*/

// ============================================
// Usage Notes:
// ============================================

/*
1. OFFLINE INDICATOR:
   - Add once at the top level of your App
   - Automatically shows warning when offline
   - Dismisses when connection is restored
   - No configuration needed

2. PWA INSTALL BUTTON:
   - Add to Header or Navigation
   - Shows only when app is installable
   - Automatically disappears after install
   - Styled to match your theme

3. SERVICE WORKER:
   - Registered automatically in src/index.js
   - No manual configuration needed
   - Works in production builds only
   - Handles offline caching automatically

4. MANIFEST:
   - Located in public/manifest.json
   - Update with your app details
   - Icons automatically cached
   - Splash screen setup included

5. TESTING:
   - Run: npm run build
   - Run: npx serve -s build
   - Open in browser
   - Use DevTools to monitor Service Worker
   - Check "Offline" in DevTools to test offline mode
*/
