import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <header>
        <Hero />
      </header>
      <section>
        <TechStackSection />
      </section>
      <section>
        <ProjectsSection />
      </section>
      <section>
        <EducationSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
