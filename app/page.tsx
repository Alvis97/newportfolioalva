import Image from "next/image";
import Navigation from "../app/components/Navigation"
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/AboutPage";

export default function Home() {
  return (
    <div className="mx-auto flex h-full flex-col flex-1 w-[90vw] font-sans md:w-[95vw]">
      <header className="w-full shrink-0">
        <Navigation/>
      </header>
      
      <main className="flex min-h-0 w-full flex-1 snap-y snap-proximity flex-col gap-6 overflow-y-auto scroll-smooth" >
        <section id="home" className="flex min-h-full shrink-0 snap-start flex-col justify-center py-10">
          <LandingPage/>      
        </section>
         
        <section id="about" className="flex min-h-full shrink-0 snap-start flex-col justify-center py-10">
          <AboutPage />
        </section>
      </main>

      <footer className="w-full shrink-0" >
        <Footer/>
      </footer>
    </div>
  );
}
