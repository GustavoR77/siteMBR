import React from "react";
import _data from "../../data";

export default class Screenshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      price: _data.price,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section ptb-100 blue-gray2-bg"
        >
          <div className="container">
            <div id="modal">
  
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center">
                  <h2>
                    Nossos produtos digitais
                    <br /> <span>Looks awesome</span>
                  </h2>
                  <p className="lead">
                    Credibly synthesize multimedia based networks vis-a-vis
                    top-line growth strategies. Continually leverage existing
                    worldwide interfaces{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="screen-slider-content mt-5">
              <div className=""></div>
              <div className="screen-carousel owl-carousel owl-theme dot-indicator">
                <div className="screen-carousel-single">
                  <img
                    src="img/games/magic-club.png"
                    className="img-fluid"
                    alt="screenshots"
                    width="600"
                  />
                </div>
                <div className="screen-carousel-single">
                  <img
                    src="img/games/alt.png"
                    className="img-fluid"
                    alt="screenshots"
                    width="600"
                  />
                </div>
                <div className="screen-carousel-single">
                  <img
                    src="img/games/kubets.png"
                    className="img-fluid"
                    alt="screenshots"
                    width="600"
                  />
                </div>
                <div className="screen-carousel-single">
                  <img
                    src="img/games/melhor-viagem.png"
                    className="img-fluid"
                    alt="screenshots"
                    width="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
