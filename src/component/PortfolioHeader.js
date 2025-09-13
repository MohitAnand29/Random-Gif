function PortfolioHeader({ profileOpen, setProfileOpen, onBack, activeSection, setActiveSection }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-gray-800/70 p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <button 
          onClick={onBack} 
          className="text-sm md:text-base px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          ← Back
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-white">My Portfolio</h1>
      </div>

      <nav className="flex gap-4">
        <button
          onClick={() => { setProfileOpen(true); setActiveSection("profile"); }}
          className={`nav-link ${activeSection === "profile" ? "text-indigo-400" : "text-white"}`}
        >
          Profile
        </button>
        <button
          onClick={() => { setProfileOpen(true); setActiveSection("skills"); }}
          className={`nav-link ${activeSection === "skills" ? "text-indigo-400" : "text-white"}`}
        >
          Skills
        </button>
        <button
          onClick={() => { setProfileOpen(true); setActiveSection("projects"); }}
          className={`nav-link ${activeSection === "projects" ? "text-indigo-400" : "text-white"}`}
        >
          Projects
        </button>
        <button
          onClick={() => { setProfileOpen(true); setActiveSection("education"); }}
          className={`nav-link ${activeSection === "education" ? "text-indigo-400" : "text-white"}`}
        >
          Education
        </button>
        <button
          onClick={() => { setProfileOpen(true); setActiveSection("contact"); }}
          className={`nav-link ${activeSection === "contact" ? "text-indigo-400" : "text-white"}`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

export default PortfolioHeader;
