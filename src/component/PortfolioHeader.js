function PortfolioHeader({ profileOpen, setProfileOpen, onBack, activeSection, setActiveSection }) {
  const navItems = [
    { id: "profile", label: "About", icon: "user" },
    { id: "skills", label: "Skills", icon: "code" },
    { id: "projects", label: "Projects", icon: "folder" },
    { id: "education", label: "Education", icon: "graduation-cap" },
    { id: "contact", label: "Contact", icon: "envelope" }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="self-start mb-6 professional-btn px-4 py-2 rounded-full flex items-center space-x-2 transition-colors group"
      >
        <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        <span>Back to GIFs</span>
      </button>
      
      <div className="floating mb-8">
        <div className="cube mx-auto">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      
      <h1 
        className="text-5xl md:text-7xl font-bold mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <span className="gradient-text">MOHIT</span> 
        <span className="text-white"> ANAND</span>
      </h1>
      
      <div className="typewriter mb-6">
        <h2 className="text-xl md:text-2xl text-slate-300">
          Full Stack Developer & UI/UX Enthusiast
        </h2>
      </div>
      
      <div className="flex space-x-4 mb-8">
        <a href="#" className="professional-btn p-3 rounded-full hover:scale-110 transition-transform">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="#" className="professional-btn p-3 rounded-full hover:scale-110 transition-transform">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
        <a href="#" className="professional-btn p-3 rounded-full hover:scale-110 transition-transform">
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>
      
      <button 
        onClick={() => setProfileOpen(!profileOpen)}
        className="professional-btn px-6 py-3 rounded-full flex items-center space-x-2 transition-colors mb-8"
      >
        <span>{profileOpen ? "Hide Profile" : "View Profile"}</span>
        <i className={`fas ${profileOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </button>

      {/* Navigation */}
      {profileOpen && (
        <div className="w-full max-w-2xl glass-card p-4 mb-8">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.id 
                    ? "bg-indigo-600 text-white" 
                    : "bg-slate-700/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <i className={`fas fa-${item.icon}`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default PortfolioHeader;