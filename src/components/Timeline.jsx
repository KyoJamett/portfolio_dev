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
              Experience
            </h2>

            <div className="timeline" data-animate-el>
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">Dropbox</h4>
                  <h5 className="timeline__meta">Product Designer</h5>
                  <p className="timeline__timeframe">August 2019 - Present</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">Microsoft</h4>
                  <h5 className="timeline__meta">Frontend Developer</h5>
                  <p className="timeline__timeframe">August 2016 - July 2019</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end timeline --> */}
          </div>
          {/* <!-- end column --> */}

          <div className="col-lg-6 col-md-12 mb-5 px-4 px-lg-5 mt-5 mt-lg-0">
            <h2 className="text-pretitle" data-animate-el>
              Education
            </h2>

            <div className="timeline" data-animate-el>
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">University of Life</h4>
                  <h5 className="timeline__meta">Master in Graphic Design</h5>
                  <p className="timeline__timeframe">April 2015</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
                  </p>
                </div>
              </div>

              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">School of Cool Designers</h4>
                  <h5 className="timeline__meta">
                    B.A. Degree in Graphic Design
                  </h5>
                  <p className="timeline__timeframe">August 2012</p>
                </div>
                <div className="timeline__desc">
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi.
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
