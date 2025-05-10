export const Header = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">
              I'm Ignacio, a Fullstack Developer focused on building clean,
              scalable web solutions.
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              Skilled in React, Spring Boot, and Javascript — I craft solutions
              from frontend to backend, with a focus on clean code and
              user-centered design.
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
