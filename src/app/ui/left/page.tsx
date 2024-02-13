"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import "../../style.css";
import { useState, useEffect } from "react";

export default function Left() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sobreMiSection = document.querySelector("#sobremi");
      const habilidadesSection = document.querySelector("#habilidades");
      const proyectosSection = document.querySelector("#proyectos");

      const sobreMiActive =
        sobreMiSection &&
        sobreMiSection.getBoundingClientRect().top >= 0 &&
        sobreMiSection.getBoundingClientRect().bottom <= window.innerHeight;
      const habilidadesActive =
        habilidadesSection &&
        habilidadesSection.getBoundingClientRect().top >= 0 &&
        habilidadesSection.getBoundingClientRect().bottom <= window.innerHeight;
      const proyectosActive =
        proyectosSection &&
        proyectosSection.getBoundingClientRect().top >= 0 &&
        proyectosSection.getBoundingClientRect().bottom <= window.innerHeight;

      if (sobreMiActive) {
        setActiveSection("sobremi");
      } else if (habilidadesActive) {
        setActiveSection("habilidades");
      } else if (proyectosActive) {
        setActiveSection("proyectos");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper__left lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        {/* tracking-tight es para acomodar el espacio entre letras */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Sevastian Caballero
        </h1>
        <h4 className="mt-3 text-lg font-medium text-slate-300 tracking-tight sm:text-xl">
          Ingeniero de Sistemas e informática
        </h4>
        {/* leading-normal es para acomodar el interlineado entre textos*/}
        <p className="mt-4 max-w-xs leading-normal text-slate-300">
          Construyo páginas web priorizando la experiencia del usuario.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <li>
              {/* Agregamos group a la clase para luego en el span agregar el focus y hover*/}
              <LinkScroll
                activeClass="active"
                to="sobremi"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="group flex items-center py-3 cursor-pointer"
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                    activeSection === "sobremi"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600"
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                    activeSection === "sobremi"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  Sobre mi
                </span>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="habilidades"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                className="group flex items-center py-3 cursor-pointer"
              >
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                    activeSection === "habilidades"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600"
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                    activeSection === "habilidades"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  Habilidades
                </span>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="proyectos"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="group flex items-center py-3 cursor-pointer"
              >
                {" "}
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                    activeSection === "proyectos"
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600"
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                    activeSection === "proyectos"
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                >
                  Proyectos
                </span>
              </LinkScroll>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center text-slate-300">
        <a href="https://github.com/Zylown" target="_blank" title="Github">
          <li className="mr-5 text-3xl shrink-0">
            <FaGithub className="hover:text-white hover:scale-110 transition-all ease-in-out" />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/sevastian-caballero-hoyos/"
          target="_blank"
          title="Linkedin"
        >
          <li className="mr-5 text-3xl shrink-0">
            <FaLinkedin className="hover:text-white hover:scale-110 transition-all ease-in-out" />
          </li>
        </a>
        <a
          href="https://www.instagram.com/sevastianhoyos/"
          target="_blank"
          title="Instagram"
        >
          <li className="mr-5 text-3xl shrink-0">
            <FaInstagram className="hover:text-white hover:scale-110 transition-all ease-in-out" />
          </li>
        </a>
      </ul>
    </div>
  );
}
