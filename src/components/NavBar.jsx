import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("mainNav");
      if (navbar)
        navbar.classList.toggle("navbar-shrink", window.scrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          Inicio
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline">
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portafolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
