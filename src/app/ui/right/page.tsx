import React from "react";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Sobremi from "./Sobremi";

export default function Right() {
  return (
    <div className="wrapper__right pt-24 lg:w-1/2 lg:py-24 text-slate-300">
      <section
        id="sobremi"
        className="section__right--sobremi mb-16 scroll-mt-16 md:mb-24 lg:mb-40 lg:scroll-mt-24"
      >
        <Sobremi />
      </section>
      <section
        id="habilidades"
        className="section__right--habilidades mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Habilidades />
      </section>
      <section
        id="proyectos"
        className="section__right--habilidades mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <Proyectos />
      </section>
    </div>
  );
}
