import { useEffect } from "react";
import Navigation from "./components/Navigation"; // Assuming this is the component rendering the <nav>...</nav> part
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    // --- Theme toggle functionality ---
    const themeToggleButton = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Initialize theme based on localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.classList.toggle("dark", savedTheme === "dark");

    const handleThemeToggle = () => {
      htmlElement.classList.toggle("dark");
      const isDark = htmlElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", handleThemeToggle);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      if (themeToggleButton) {
        themeToggleButton.removeEventListener("click", handleThemeToggle);
      }
    };
  }, []); // Empty dependency array means this effect runs once after initial render and cleans up on unmount

  return (
    <>
      <Navigation />
      <Hero />
      <Sponsors />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
