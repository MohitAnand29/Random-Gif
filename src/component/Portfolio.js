import { useState, useEffect } from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioProfile from "./PortfolioProfile";
import PortfolioSkills from "./PortfolioSkills";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioEducation from "./PortfolioEducation";
import PortfolioContact from "./PortfolioContact";

function Portfolio({ onBack }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    // Initialize particles when component mounts
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#6366f1" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case "profile":
        return <PortfolioProfile />;
      case "skills":
        return <PortfolioSkills />;
      case "projects":
        return <PortfolioProjects />;
      case "education":
        return <PortfolioEducation />;
      case "contact":
        return <PortfolioContact />;
      default:
        return <PortfolioProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 animate-gradient-xy"></div>
      
      {/* Particles Background */}
      <div id="particles-js" className="fixed top-0 left-0 w-full h-full z-0"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <PortfolioHeader 
          profileOpen={profileOpen} 
          setProfileOpen={setProfileOpen}
          onBack={onBack}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        {profileOpen && (
          <div className="mt-8 md:mt-12">
            {renderSection()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;