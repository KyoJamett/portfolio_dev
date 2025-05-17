export const Header = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              Soy Ignacio, Ingeniero Civil Informático enfocado en desarrollar
              soluciones web limpias y escalables.
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              Con experiencia en Javascript, React y Laravel - Desarrollo
              soluciones tanto backend como frontend, enfocandome en código
              limpio y un diseño enfocado en los usuarios.
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              Quiero saber más
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
