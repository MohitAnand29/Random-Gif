function PortfolioEducation() {
  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Education & Certifications</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-slate-200">Education</h3>
          
          <div className="mb-6">
            <div className="flex items-start mb-2">
              <div className="bg-indigo-600 p-2 rounded-full mr-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h4 className="font-bold">Master of Computer Applications (MCA)</h4>
                <p className="text-slate-400">Savitribai Phule Pune University | 2022 – 2024</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-start mb-2">
              <div className="bg-purple-600 p-2 rounded-full mr-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div>
                <h4 className="font-bold">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-slate-400">Patliputra University | 2019 – 2022</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-slate-200">Certifications</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-amber-600 p-2 rounded-full mr-4">
                <i className="fas fa-certificate"></i>
              </div>
              <div>
                <h4 className="font-bold">Meta Front-End Developer Professional Certificate</h4>
                <p className="text-slate-400">Coursera | 2025</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 p-2 rounded-full mr-4">
                <i className="fas fa-award"></i>
              </div>
              <div>
                <h4 className="font-bold">React - The Complete Guide (Hooks, Redux)</h4>
                <p className="text-slate-400">Udemy | 2024</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 p-2 rounded-full mr-4">
                <i className="fas fa-medal"></i>
              </div>
              <div>
                <h4 className="font-bold">JavaScript Algorithms Certification</h4>
                <p className="text-slate-400">freeCodeCamp | 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioEducation;