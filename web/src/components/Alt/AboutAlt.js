import React, { useState, useEffect } from "react";

import AboutAltMobile from "./AboutAltMobile";

function About(props) {
  const background = props;

  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <section
        id="about"
        className={"about-us ptb-100 " + background.background}
      >
        {width > 768 ? (
          <div className="container magic-club-font">
            <div className="row align-items-center justify-content-around px-5">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <h2 className="text-dark magic-club-font">Jogo pedagógico</h2>
                  <h2
                    className="magic-club-subtitle magic-club-font"
                    style={{
                      color: "#E96365",
                      fontSize: "4rem",
                    }}
                  >
                    ALT
                  </h2>
                  <div className="text-dark lead project-font lh-1">
                    <p>
                      ALT é um jogo pedagógico criado pela MBR Tecnologia
                      Educacional, direcionado à alfabetização que contempla a
                      inclusão de alunos, integrando o ambiente escolar na mesma
                      tarefa metodológica, para um aprendizado conjunto e
                      divertido.
                    </p>
                    <p>
                      É um software que consolida a alfabetização nas escolas
                      regulares e inclusivas, com atividades e estímulos que
                      atendem as necessidades de todos os alunos. O ALT traz a
                      tecnologia a favor de uma inclusão funcional que atende as
                      necessidades desde a Educação Infantil, Ensino Fundamental
                      ao EJA, ampliando através das atividades os
                      desenvolvimentos necessários para uma alfabetização
                      completa e eficaz.
                    </p>
                    <p>
                      As gerações avançam e com elas as formas de conexões. Os
                      alunos se beneficiam com as ferramentas do software, que
                      além de trazer conteúdo para a alfabetização, traz também
                      estratégias para a comunicação, expressão e aquisição de
                      conhecimentos gerais.
                    </p>
                    <p>
                      ALT é a evolução para uma educação igualitária,
                      facilitando a inclusão dos alunos com atividades que
                      conectam todos através de seus recursos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-content-right">
                  <img
                    src="img/games/alt/about.png"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AboutAltMobile />
        )}
      </section>
    </>
  );
}

export default About;
