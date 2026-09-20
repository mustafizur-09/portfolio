export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
          <p className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-3xl border border-zinc-800/80 shadow-2xl shadow-black/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium text-zinc-200">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-white placeholder-zinc-500 text-base"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium text-zinc-200">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-white placeholder-zinc-500 text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-zinc-200">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all text-white placeholder-zinc-500 resize-none text-base"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-base sm:text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
