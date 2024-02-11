import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Left() {
  return (
    <div className="wrapper__left lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
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
              <a className="group flex items-center py-3 activenow">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Sobre mi
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Habilidades
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Proyectos
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <a href="https://github.com/Zylown" target="_blank" title="Github">
          <li className="mr-5 text-2xl shrink-0">
            <FaGithub />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/sevastian-caballero-hoyos/"
          target="_blank"
          title="Linkedin"
        >
          <li className="mr-5 text-2xl shrink-0">
            <FaLinkedin />
          </li>
        </a>
        <a
          href="https://www.instagram.com/sevastianhoyos/"
          target="_blank"
          title="Instagram"
        >
          <li className="mr-5 text-2xl shrink-0">
            <FaInstagram />
          </li>
        </a>
      </ul>
    </div>
  );
}
