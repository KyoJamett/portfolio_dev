export const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Pongámonos en contacto</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              ¿Tienes un proyecto en mente o deseas saber más sobre mi trabajo?
              ¡Envíame un mensaje y te responderé lo antes posible!
            </p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            {/*<!-- * * * * * * * * * * * * * * *-->*/}
            {/*<!-- * * SB Forms Contact Form * *-->*/}
            {/*<!-- * * * * * * * * * * * * * * *-->*/}
            {/*<!-- This form is pre-integrated with SB Forms.-->*/}
            {/*<!-- To make this form functional, sign up at-->*/}
            {/*<!-- https://startbootstrap.com/solution/contact-forms-->*/}
            {/*<!-- to get an API token!-->*/}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              {/*<!-- Name input-->*/}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre..."
                  data-sb-validations="required"
                />
                <label htmlFor="name">Nombre completo</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  El nombre es obligatorio
                </div>
              </div>
              {/*<!-- Email address input-->*/}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  data-sb-validations="required,email"
                />
                <label htmlFor="email">Correo electrónico</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  El correo es obligatorio.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  El correo no es válido.
                </div>
              </div>
              {/*<!-- Phone number input-->*/}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label htmlFor="phone">Número de teléfono</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  El número de teléfono es requerido.
                </div>
              </div>
              {/*<!-- Message input-->*/}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Escribe tu mensaje aquí..."
                  style={{ height: "10rem" }}
                  data-sb-validations="required"
                ></textarea>
                <label htmlFor="message">Mensaje</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  El mensaje es requerido.
                </div>
              </div>
              {/*<!-- Submit success message-->*/}
              {/*<!---->*/}
              {/*<!-- This is what your users will see when the form-->*/}
              {/*<!-- has successfully submitted-->*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">¡Mensaje enviado con éxito!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/*<!-- Submit error message-->*/}
              {/*<!---->*/}
              {/*<!-- This is what your users will see when there is-->*/}
              {/*<!-- an error submitting the form-->*/}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error al enviar el mensaje.
                </div>
              </div>
              {/*<!-- Submit Button-->*/}
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-xl disabled"
                  id="submitButton"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>(+569) 2637-9949</div>
          </div>
        </div>
      </div>
    </section>
  );
};
