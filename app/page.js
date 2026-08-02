import Navbar from "./Navbar";
import ProjectsShowcase from "./ProjectsShowcase";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Connect from "./Connect";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsShowcase />
      <Skills />
      <AboutMe />
      <Connect />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrap">
        <div className="hero__image-circle">
          {/* Swap this placeholder for your own photo at /public/profile.jpg */}
          <img
            src="/mishs-2.jpg"
            alt="Mihle Mncunzwa"
            className="hero__image"
          />
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__greeting">Hi! I&apos;m Mihle Mncunzwa</p>
        <h1 className="hero__title">
          <em>Product Designer</em> with a developer's eye.
        </h1>
        <p className="hero__subtitle">
          Recent CS grad who designs like a product thinker and builds like an
          engineer.
        </p>

        <div className="hero__buttons">
          <a href="#resume" className="pill pill--orange">
            Resume
          </a>
          <a href="#projects" className="pill pill--red">
            Projects
          </a>
          <a href="#contact" className="pill pill--cyan">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
