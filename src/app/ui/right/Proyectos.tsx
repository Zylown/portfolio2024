import Image from "next/image";
import EncriptadorImg from "../../assets/encriptador_photo.jpg";
import Aerojet from "../../assets/aerojet_photo.jpg";
import Alura from "../../assets/alura.jpg";
import Org from "../../assets/org.jpg";
import Aluraflix from "../../assets/aluraflix.jpg";
import Filomena from "../../assets/filomena.jpg";
import Dynamo from "../../assets/dynamo.jpg";
import Bot from "../../assets/bot.jpg";
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
          <p className="text-sm tracking-tight">
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
          <p className="text-sm tracking-tight">
            Este proyecto es una agencia de viajes para una aerolínea que
            presenté como evaluación final para un curso de la universidad.
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
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Alura}
          alt="Imagen de AluraGeek"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">AluraGeek</h4>
          <p className="text-sm tracking-tight">
            Este proyecto es una tienda ecommerce que fue un reto que nos
            propusieron en el programa Alura+ONE.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://github.com/Zylown/AluraGeek/tree/crud"
              target="_blank"
            >
              <FaGithub className="text-white text-lg " />
            </a>
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://alurageek-ecommercee.web.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Org}
          alt="Imagen de Org"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Organización</h4>
          <p className="text-sm tracking-tight">
            Este proyecto es como la página de una organización, es mi primer
            proyecto con react a la mano de Alura+ONE.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://github.com/Zylown/org"
              target="_blank"
            >
              <FaGithub className="text-white text-lg " />
            </a>
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://org-qxrfil81i-zylown.vercel.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Aluraflix}
          alt="Imagen de AluraFlix"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Aluraflix</h4>
          <p className="text-sm tracking-tight">
            Este proyecto fue el reto final del programa Alura+ONE, es como una
            plataforma de streaming.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://github.com/Zylown/AluraFlix"
              target="_blank"
            >
              <FaGithub className="text-white text-lg" />
            </a>
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://alura-flix-nz8na5o7d-zylown.vercel.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Filomena}
          alt="Imagen de Filomena Restaurant"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Filomena Restaurant</h4>
          <p className="text-sm tracking-tight">
            Landing page de un restaurante.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://filomena-proyect.vercel.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Dynamo}
          alt="Imagen de AluraFlix"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Dynamo Web Services</h4>
          <p className="text-sm tracking-tight">
            Sitio web de servicios de desarrollo web y diseño gráfico.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://dynamo-landing-ws.vercel.app/"
              target="_blank"
            >
              <FaArrowRight className="text-white text-lg -rotate-45" />
            </a>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Bot}
          alt="Imagen de AluraFlix"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Bot de discord</h4>
          <p className="text-sm tracking-tight">
            Creación de un bot de discord que tiene como función emparejar a
            personas random que se unan ya sea por canal de voz o solo texto.
          </p>
          <div className="icons flex gap-4 mt-4">
            <a
              className="hover:scale-110 transition-all ease-in-out"
              href="https://discord.gg/27VVC3jq"
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
