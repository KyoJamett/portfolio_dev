import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Action } from "./components/Action";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap").then(({ ScrollSpy }) => {
        new ScrollSpy(document.body, {
          target: "#mainNav",
          offset: 74,
        });
      });
    }
  }, []);

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Action />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
