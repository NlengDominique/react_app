import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import RevealOnScroll from '../RevealOnScroll'

function About() {
  const frontendSkills = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Vue Js",
      icon: <FaVuejs />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
    },
  ];
  const backendSkills = [
    {
      name: "Laravel",
      icon: <FaLaravel />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      name: "Spring",
      icon: <SiSpring />,
    },
    {
      name: "Node Js",
      icon: <FaNode />,
    },
    {
      name: "Express Js",
      icon:<SiExpress />,
    },
  ];





  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center "
    >
     
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me{" "}
        </h2>

        <div className="roundex-xl p-8 border-white/10  hover:-translate-y-1 transition-all px-6">
          <p className="text-gray-300 mb-6 ">
            Passionate developer with expertise in building scalable web
            applications and a knack for creating intuitive user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-full flex items-center gap-2 
                        hover:bg-blue-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    <span> {skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 text-sm rounded-full flex items-center gap-2
                        hover:bg-blue-500/20 transition-all hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                  <span> {skill.icon}</span>
                  <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10  hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.S in Software Engineering (Ongoing) </strong> -IUT DE
                DOUALA (2024-2025)
              </li>
              <li>
                <strong> BTS in Software Engineering </strong> -PIST UNIVERSITY
                (2023-2024)
              </li>
              <li>
                <strong> Certification in Web Application Development </strong>{" "}
                -CIS FORMATION (2022-2023)
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">👨‍💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-bold">
                  Full-Stack Developer at Davinci IT Solutions (Dec 2024 -
                  Present)
                </h4>
                <p>
                  Developed a cultural event website for the Bassa community.
                  <br />
                  Handled both the front-end and back-end development of the
                  platform.
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Mobile Developer at NGCORP (Jan 2024 - Apr 2024)
                </h4>
                <p>
                  Developed a mobile application for managing client and
                  prospect requests.
                  <br />
                  Built a REST API in PHP to connect the app to the database.
                </p>
              </div>
              <div>
                <h4 className="font-bold">
                  Web Developer at WIB (Jul 2023 - Sep 2023)
                </h4>
                <p>
                  Developed a web application for money transaction management
                  using Laravel.
                  <br />
                  Designed responsive user interfaces with HTML, CSS,
                  JavaScript, and Bootstrap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default About;
