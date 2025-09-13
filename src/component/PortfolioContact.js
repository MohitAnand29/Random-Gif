function PortfolioContact() {
  return (
    <section className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6 text-slate-200">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-600 p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-slate-400">Patna, Bihar, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-slate-400">mohitanand620@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-slate-400">+91 6201151125</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="font-bold mb-4">Connect with me</h4>
 <div className="flex space-x-4">
  <a 
    href="https://github.com/MohitAnand29" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="professional-btn p-3 rounded-full hover:scale-110 transition-transform"
  >
    <i className="fab fa-github text-xl"></i>
  </a>
  <a 
    href="https://linkedin.com/in/your-linkedin-id" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="professional-btn p-3 rounded-full hover:scale-110 transition-transform"
  >
    <i className="fab fa-linkedin-in text-xl"></i>
  </a>
  <a 
    href="https://twitter.com/your-twitter-id" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="professional-btn p-3 rounded-full hover:scale-110 transition-transform"
  >
    <i className="fab fa-twitter text-xl"></i>
  </a>
</div>


          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-slate-200">Send a Message</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full professional-input px-4 py-3 rounded-lg"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full professional-input px-4 py-3 rounded-lg"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full professional-input px-4 py-3 rounded-lg"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button type="submit" className="professional-btn w-full py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PortfolioContact;