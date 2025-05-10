export const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Mis servicios</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-code-slash fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Desarrollo Fullstack</h3>
              <p className="text-muted mb-0">
                Desarrollo y mantenimiento de aplicaciones web utilizando React,
                Spring Boot y herramientas modernas.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-bar-chart-line-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Optimización de procesos</h3>
              <p className="text-muted mb-0">
                Experiencia en desarrollar herramientas para mejorar los flujos
                de trabajo de las compañías en contextos de seguros y minería.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-diagram-3-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Soluciones escalables</h3>
              <p className="text-muted mb-0">
                Enfoque en escribir código mantenible y diseñar arquitecturas
                escalables desde el comienzo.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-people-fill fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Trabajo colaborativo</h3>
              <p className="text-muted mb-0">
                Buenas habilidades comunicativas y comprometido con equipos de
                trabajo, adaptable a diversos entornos y herramientas de
                desarrollo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
