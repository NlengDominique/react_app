import { useState ,useEffect } from "react";


function Home() {

  const fullText = ' Hello I am LucasDev'
  const [text, setText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
      }
    },1000)
  
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      
      <div className="text-center z-10 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r 
           animate-bounce from-blue-500 to-cyan-400 text-transparent bg-clip-text leading-right"
        >
          {text}
         
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am fullstack developer who love crafting clean,scalable web
          applications. My goal is to build solutions that offer both
          exceptional performance and a delightful user experience.
        </p>
      </div>

      <div className="flex  justify-center space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white py-3 px-6 rounded font-medium hover:translate-y-0.5 transition relative overflow-hidden
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium
          transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
        >
         Contact Me
        </a>
      </div>
     
    </section>
  );
}

export default Home;
