function PortfolioSkills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "REST APIs", level: 85 },
  ];

  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-slate-400">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg text-center hover:scale-105 transition-transform">
          <i className="fab fa-react text-4xl text-cyan-400 mb-2"></i>
          <p>React</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center hover:scale-105 transition-transform">
          <i className="fab fa-node-js text-4xl text-green-500 mb-2"></i>
          <p>Node.js</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center hover:scale-105 transition-transform">
          <i className="fas fa-database text-4xl text-emerald-400 mb-2"></i>
          <p>MongoDB</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center hover:scale-105 transition-transform">
          <i className="fab fa-js-square text-4xl text-yellow-400 mb-2"></i>
          <p>JavaScript</p>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSkills;