import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import VisitorCounter from "./sections/VisitorCount";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
      <VisitorCounter />

      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-[-1]"
      >
        <img src="./gradients/left-blob.png" alt="" />
      </div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-[-1] rotate-12"
      >
        <img src="./gradients/right-blob.png" alt="" />
      </div>
    </div>
  );
}
