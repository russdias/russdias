import Projects from "@/modules/Projects";
import Intro from "@/modules/Intro";
import Footer from "@/modules/Footer";
import Contact from "@/modules/Contact";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20 px-10 lg:px-0 w-full">
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
