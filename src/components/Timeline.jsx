export const Timeline = () => {
  return (
    <section
      className="page-section bg-primary about-timelines pt-5 pt-lg-6"
      id="timeline"
    >
      <div className="container px-4 px-lg-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-5 px-4 px-lg-5 mt-5 mt-lg-0">
            <h2 className="text-pretitle" data-animate-el>
              Experiencia
            </h2>

            <div className="timeline" data-animate-el>
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">Workmate</h4>
                  <h5 className="timeline__meta">Fullstack Developer</h5>
                  <p className="timeline__timeframe">
                    Junio 2024 - Octubre 2024
                  </p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Sistemas de administración de contratos laborales y control
                    de acceso a faenas mineras: Implementación de nuevas
                    funcionalidades, modificación de vistas y controladores.
                    Colaboración con mesa de ayuda en resolución de bugs en
                    incidencias.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">FID Seguros</h4>
                  <h5 className="timeline__meta">
                    Analista Desarrollador/Ingeniero de Software
                  </h5>
                  <p className="timeline__timeframe">Enero 2021 - Abril 2023</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Sistema MACAO: Mantenimiento y desarrollos para sistema de
                    gestión de emisiones y renovaciones de pólizas automotrices.
                    <hr></hr>
                    Catálogos corporativos: Sistema de consulta a bases de datos
                    para ser utilizado por sistemas internos de la empresa.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end timeline --> */}
          </div>
          {/* <!-- end column --> */}

          <div className="col-lg-6 col-md-12 mb-5 px-4 px-lg-5 mt-5 mt-lg-0">
            <h2 className="text-pretitle" data-animate-el>
              Estudios
            </h2>

            <div className="timeline" data-animate-el>
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">
                    Licenciado en Ciencias de la Ingeniería
                  </h4>
                  <h5 className="timeline__meta">
                    Pontificia Universidad Católica de Valparaíso
                  </h5>
                  <p className="timeline__timeframe">Diciembre 2018</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Grado académico intermedio obtenido tras completar el cuarto
                    año del plan de estudios de Ingeniería Civil Informática.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">
                    Ingeniero Civil Informático
                  </h4>
                  <h5 className="timeline__meta">
                    Pontificia Universidad Católica de Valparaíso
                  </h5>
                  <p className="timeline__timeframe">Diciembre 2021</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Título profesional obtenido tras completar el plan de
                    estudios y defensa de memoria en el área de sistemas de
                    software.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end timeline --> */}
          </div>
        </div>
      </div>
      {/* <!-- end column --> */}
    </section>
  );
};
