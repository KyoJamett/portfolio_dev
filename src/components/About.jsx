export const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Sobre mi</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Soy Ignacio Jamett, desarrollador orientado a la implementación de
              soluciones informáticas con buen desempeño, mantenibilidad y
              escalabilidad. Cuento con experiencia en equipos de desarrollo en
              los sectores de seguros y minería, participando en sistemas para
              la gestión de contratos laborales y control de acceso.
            </p>
            <p className="text-white-75 mb-4">
              Me interesa la optimización de procesos mediante tecnología, y
              actualmente estoy ampliando mis competencias en frontend para
              consolidarme como Full Stack Developer. Me caracterizan el
              compromiso, la adaptabilidad y la entrega de soluciones alineadas
              a las necesidades del negocio.
            </p>
            <a className="btn btn-light btn-xl" href="#services">
              Ver mis servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
