import Left from "./ui/left/page";
import Right from "./ui/right/page";

export default function Home() {
  return (
    <main className="wrapper__main mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="container__main flex lg:justify-between lg:gap-4 min-h-screen">
        <Left />
        <Right />
      </div>
    </main>
  );
}
