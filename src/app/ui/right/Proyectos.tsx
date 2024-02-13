import Image from "next/image";
import EncriptadorImg from "../../assets/encriptador_photo.jpeg";
import Aerojet from "../../assets/aerojet_photo.jpeg";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Proyectos() {
  return (
    <div className="wrapper__proyects flex flex-col gap-12 justify-center">
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={EncriptadorImg}
          alt="Imagen de encriptador de texto"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Encriptador de texto</h4>
          <p className="text-sm">
            Este encriptador de texto fue un reto que nos propusieron en el
            programa Alura+ONE.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://github.com/Zylown/Encriptador"
              target="_blank"
            >
              <FaGithub className="text-white text-lg " />
            </a>
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://zylown.github.io/Encriptador/"
              target="_blank"
            >
              <FaArrowRight className="text-white  text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Aerojet}
          alt="Imagen de Aerojet"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Aerojet</h4>
          <p className="text-sm">
            Este encriptador de texto fue un reto que nos propusieron en el
            programa Alura+ONE.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://github.com/Zylown/AeroJet-java"
              target="_blank"
            >
              <FaGithub className="text-white text-lg " />
            </a>
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://aero-jet.netlify.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
