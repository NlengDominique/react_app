import React from "react";
import { FaGithub } from "react-icons/fa";
import congres from "../../assets/images/congres.png"
import RevealOnScroll from '../RevealOnScroll'

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-2xl  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
          <img src={congres} className="w-full object-cover" alt="Image adna" />
            <h3 className="text-2xl font-bold mb-2 mt-6">Site web Congres ADNA</h3>
            <p className="text-gray-400 mb-4">
             ADNA est un site web d'evenements culturels Bassa 
            </p>
            <div>
              {["Laravel", "Vue Js", "Tailwind"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://mangog2025.congresadnandogbatjeck.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
              >
                View Project 
              </a>
              <a href="https://github.com/NlengDominique/front-end-congres-main" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
              <FaGithub/>
              </a>
            </div>
          </div>
          <div className="p-6 rounded-2xl  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
          <img src={congres} className="w-full object-cover" alt="Image adna" />
            <h3 className="text-2xl font-bold mb-2 mt-6">Site web Congres ADNA</h3>
            <p className="text-gray-400 mb-4">
             ADNA est un site web d'evenements culturels Bassa 
            </p>
            <div>
              {["Laravel", "Vue Js", "Tailwind"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://mangog2025.congresadnandogbatjeck.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
              >
                View Project 
              </a>
              <a href="https://github.com/NlengDominique/front-end-congres-main" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
              <FaGithub/>
              </a>
            </div>
          </div>
          <div className="p-6 rounded-2xl  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
          <img src={congres} className="w-full object-cover" alt="Image adna" />
            <h3 className="text-2xl font-bold mb-2 mt-6">Site web Congres ADNA</h3>
            <p className="text-gray-400 mb-4">
             ADNA est un site web d'evenements culturels Bassa 
            </p>
            <div>
              {["Laravel", "Vue Js", "Tailwind"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://mangog2025.congresadnandogbatjeck.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
              >
                View Project 
              </a>
              <a href="https://github.com/NlengDominique/front-end-congres-main" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
              <FaGithub/>
              </a>
            </div>
          </div>
          <div className="p-6 rounded-2xl  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] ">
          <img src={congres} className="w-full object-cover" alt="Image adna" />
            <h3 className="text-2xl font-bold mb-2 mt-6">Site web Congres ADNA</h3>
            <p className="text-gray-400 mb-4">
             ADNA est un site web d'evenements culturels Bassa 
            </p>
            <div>
              {["Laravel", "Vue Js", "Tailwind"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                 hover:bg-blue-500/30 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://mangog2025.congresadnandogbatjeck.com/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 "
              >
                View Project 
              </a>
              <a href="https://github.com/NlengDominique/front-end-congres-main" className="text-blue-400 hover:text-blue-300 transition-colors my-4 ">
              <FaGithub/>
              </a>
            </div>
          </div>
         
        
        
        </div>
        
      </div>
     
    </section>
  );
}

export default Projects;
