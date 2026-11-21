import Image from "next/image";
import Navigation from "../app/components/Navigation"
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";

export default function Home() {
  return (
    <div className="mx-auto flex h-full flex-col flex-1 w-[90vw] font-sans md:w-[95vw]">
      <header className="fixed inset-x-0 top-0 z-50 shrink-0 w-full">
        <Navigation/>
      </header>
      
      <main className="top-0 flex w-full flex-1 flex-col gap-25 pb-24" >
        <section id="home" className="flex flex-col">
          <LandingPage/>      
        </section>
         
        <section id="about" className="flex min-h-full shrink-0 snap-start flex-col justify-center py-10">
          <AboutPage />
        </section>

        <section id="projects" className="flex min-h-full flex-col justify-center py-10">
          <ProjectPage />
        </section>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-50 w-full shrink-0 bg-[var(--background)]/80 backdrop-blur" >
        <Footer/>
      </footer>
    </div>
  );
}
