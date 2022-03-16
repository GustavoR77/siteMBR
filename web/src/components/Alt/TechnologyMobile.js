import React, { useState } from "react";
import _data from "../../data";

function TechnologyMobile(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <h2
                className="magic-club-subtitle magic-club-font "
                style={{ color: "#1E6DB9", fontSize: "3rem" }}
              >
                TECNOLOGIA E EDUCAÇÃO INCLUSIVA
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <img
              src="img/games/alt/technology-mobile.png"
              alt="Livro"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnologyMobile;
