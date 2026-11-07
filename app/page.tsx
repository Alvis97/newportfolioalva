import Image from "next/image";
import Navigation from "../app/components/Navigation"
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-between w-[90vw] h-full mx-auto font-sans md:w-[95vw]">
      <header className="w-full">
        <Navigation/>
      </header>
      
      <main className="flex flex-1 w-full h-full flex-col items-center justify-between sm:items-start">
         <LandingPage/>

      </main>

      <footer className="w-full" >
        <Footer/>
      </footer>
    </div>
  );
}
