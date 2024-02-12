import Left from "./ui/left/page";
import Right from "./ui/right/page";
import "./style.css";

export default function Home() {
  return (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <main className="wrapper__main mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative">
        <div className="container__main block lg:flex lg:justify-between lg:gap-4">
          <Left />
          <Right />
        </div>
      </main>
    </div>
  );
}
