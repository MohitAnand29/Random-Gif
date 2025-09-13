function PortfolioProjects() {
  const projects = [
    {
      title: "ShopNest E-Commerce",
      description: "Full-stack e-commerce platform with JWT authentication and product search functionality.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      features: ["JWT Authentication", "Product Search", "Redis Caching"],
      performance: "40% faster API responses"
    },
    {
      title: "WeatherSphere Dashboard",
      description: "Real-time weather application with 5-day forecasts and geolocation features.",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      features: ["5-Day Forecast", "Geolocation", "Intelligent Caching"],
      performance: "30% reduced API load time"
    },
    {
      title: "Portfolio Website",
      description: "Interactive developer portfolio with modern animations and responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Interactive Design", "Responsive Layout", "Smooth Animations"],
      performance: "Optimized performance"
    },
    {
      title: "Todo List Application",
      description: "Productivity application with drag-and-drop functionality and local storage.",
      technologies: ["React", "CSS3", "LocalStorage API"],
      features: ["Drag & Drop", "Local Storage", "React.memo Optimizations"],
      performance: "40% performance improvement"
    }
  ];

  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-slate-800 rounded-xl p-6 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-slate-300 mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-indigo-900 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Features:</h4>
              <ul className="list-disc list-inside text-slate-300 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-900 p-3 rounded-lg">
              <span className="text-green-400 text-sm">🚀 {project.performance}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioProjects;