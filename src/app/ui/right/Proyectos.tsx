import Image from "next/image";
import EncriptadorImg from "../../assets/encriptador_photo.jpg";
import Aerojet from "../../assets/aerojet_photo.jpg";
import Alura from "../../assets/alura.jpg";
import Org from "../../assets/org.jpg";
import Aluraflix from "../../assets/aluraflix.jpg";
import Filomena from "../../assets/filomena.jpg";
import Dynamo from "../../assets/dynamo.jpg";
import Bot from "../../assets/bot.jpg";
import Muebles from "../../assets/muebles.jpg";
import Rapidin from "../../assets/rapidin.jpg";
import Pagos from "../../assets/pagos.jpg";
import inventario from "../../assets/demo_inventario.jpg";
import dentPlanner from "../../assets/dentPlanner.png";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Proyectos() {
  //Falta mejorar para hacerlo con un map y un array de objetos con la información de cada proyecto
  return (
    <div className="wrapper__proyects flex flex-col gap-12 justify-center">
      <h1 className="block lg:hidden text-2xl font-bold tracking-tight text-slate-200">
        Proyectos
      </h1>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
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
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
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
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Java
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Sql
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Spring
                </li>
              </ul>
            </div>
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
            propusieron en el programa Alura+ONE. Después le agregué firebase
            para la autenticación y la base de datos. Por ahora está cerrado.
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
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
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Firebase
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
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
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
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
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React Router
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Styled Components
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Ant Design
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://filomena-proyect.vercel.app/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Elfsight Widget
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React Helmet
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React Router
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Styled Components
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://dynamo-landing-ws.vercel.app/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Html
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Css
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  TailwindCSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Resend
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Express
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React Dom
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Framer Motion
                </li>
              </ul>
            </div>
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
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://discord.gg/whKsvQPgVK"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Discord JS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Muebles}
          alt="Imagen de AluraFlix"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">
            Plantilla de tienda para muebles
          </h4>
          <p className="text-sm tracking-tight">
            Creación de una tienda e-commerce para muebles.
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://github.com/Zylown/tiendamuebles"
                target="_blank"
              >
                <FaGithub className="text-white text-lg " />
              </a>
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://zylown.github.io/tiendamuebles/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  HTML
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  CSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Rapidin}
          alt="Imagen de AluraFlix"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Rapidin</h4>
          <p className="text-sm tracking-tight">
            Página que compara precios de productos en diferentes tiendas de
            menor a mayor, en Perú (es demasiado lento por ahora).
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://rapidin.onrender.com/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  NextJS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  TailwindCSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Typescript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Puppeteer
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={Pagos}
          alt="Imagen de Perupagos"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">Perupagos</h4>
          <p className="text-sm tracking-tight">
            Página que tiene un login con sus validaciones, contraseñas
            encriptadas, rutas protegidas con autenticación más roles y un
            formulario para agregar movimientos y crear cliente en caso no
            exista en una base de datos. El backend está hecho en Nestjs.
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://perupagos.worksinc.works/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  TailwindCSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Javascript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Typescript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Nestjs
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  MongoDB
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  JWT + Bycript
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Axios
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zustand
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zod
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={inventario}
          alt="Imagen de Perupagos"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">
            Demo de sistema de inventario
          </h4>
          <p className="text-sm tracking-tight">
            Demo un sistema de inventario con vista de ventas, inventario,
            kardex y registro de productos. Sin backend, todo manejado con
            estados en react.
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://inventario-front-rho.vercel.app/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  TailwindCSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Typescript
                </li>

                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React PDF
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zod
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zustand
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__proyects flex gap-4 rounded-md hover:shadow-lg pb-4">
        <Image
          className="rounded-md h-16 w-32 mt-1"
          src={dentPlanner}
          alt="Imagen de Dent Planner"
          loading="lazy"
        />
        <div className="container__text">
          <h4 className="text-white font-semibold">DentPlanner</h4>
          <p className="text-sm tracking-tight">
            Sistema para clínica odontologica que permite llevar un control de
            los pacientes, agendar citas, registrar usuarios en caso existan
            otras clínicas, tiene una vista administrador, secretario y
            odontólogo. Para más informacion en la landing page.
          </p>
          <div className="conteiner__icons--tec flex flex-col justify-between items-start">
            <div className="icons flex gap-4 mt-4">
              <a
                className="hover:scale-110 transition-all ease-in-out ml-1"
                href="https://team-12-footalent.vercel.app/"
                target="_blank"
              >
                <FaArrowRight className="text-white text-lg -rotate-45" />
              </a>
            </div>
            <div className="tecnology">
              <ul className="flex gap-2 mt-4 flex-wrap">
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Axios
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Framer Motion
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Toast
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  React
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  TailwindCSS
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Jwt
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zod
                </li>
                <li className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-xs font-medium leading-5 text-white">
                  Zustand
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
