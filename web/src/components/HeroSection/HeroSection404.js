import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="bg"
          className="hero-section background-img full-screen"

        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="error-content text-center text-white">
                  <div className="notfound-404">
                    <h1 className="text-white">404</h1>
                  </div>
                  <h3 className="text-white">Desculpe, algo deu errado</h3>
                  <p>
                    A página que você está procurando pode ter sido removida, ter o seu nome alterado,
                    ou foi temporariamente removida.
                  </p>
                  <a className="btn google-play-btn" href="/">
                    Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state,
}))(HeroSection);
