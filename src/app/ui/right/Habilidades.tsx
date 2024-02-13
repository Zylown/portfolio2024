import React from "react";

export default function Habilidades() {
  return (
    <div className="wrapper__habilidades">
      <p className="mb-4">
        Tecnologías que he estado utilizando en diversos proyectos
      </p>
      <div className="container__habilidades flex justify-between">
        <div className="flex-col">
          <div className="container__lenguages">
            <p className="text-white font-semibold">LENGUAJES</p>
          </div>
          <ul className="flex flex-col gap-0.5">
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="flex-col">
          <div className="container__frameworks">
            <p className="text-white font-semibold">FRAMEWORKS</p>
          </div>
          <ul className="flex flex-col gap-0.5">
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Next</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="flex-col">
          <div className="container__tools">
            <p className="text-white font-semibold">HERRAMIENTAS Y DISEÑO</p>
          </div>
          <ul className="flex flex-col gap-0.5">
            <li>Postman</li>
            <li>MongoDB</li>
            <li>React Developer Tools</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
