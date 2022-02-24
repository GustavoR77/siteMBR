import React, { useState } from "react";
import _data from "../../data";

function Projects(props) {
  const background = props
  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background.background}
      >
        <div className="container magic-club-font">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2 className="magic-club-subtitle magic-club-font">
                  PROJETOS INTERDISCIPLINARES
                  <br />
                </h2>
                <p className="lead text-dark">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but

                  Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.
                </p>
                <p>
                  <img
                    src="img/games/magic-club/projects.png"
                    alt="Livro"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;
