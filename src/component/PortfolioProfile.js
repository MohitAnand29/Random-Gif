function PortfolioProfile() {
  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Full-stack developer with expertise in <strong>React</strong>, <strong>Node.js</strong>, and 
            <strong> MongoDB</strong>, specializing in building high-performance web applications. 
            Delivered 5+ production-ready projects with focus on performance optimization 
            and clean code architecture.
          </p>
          
          <p className="text-slate-300 mb-6 leading-relaxed">
            Passionate about creating intuitive user experiences and solving complex problems 
            with elegant code solutions. Always eager to learn new technologies and methodologies 
            to stay at the forefront of web development.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">React Expert</span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              MA
            </div>
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full px-4 py-1 text-sm">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioProfile;