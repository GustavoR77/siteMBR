import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section id="about" className="about-us ptb-100 blue-gray2-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="about-content-left section-heading">
                  <h2>Sobre a empresa {/* <span>forward faster</span> */}</h2>
                  <p>
                    Nós da MBR acreditamos na educação interativa e lúdica. Para
                    isso, produzimos softwares fáceis de usar, atraentes e
                    divertidos há 24 anos. Nosso dia-a-dia é criar soluções para
                    uso da tecnologia em aplicações didáticas para todas as
                    idades mesclando tecnologia, design e arte para tornar o
                    aprendizado uma experiência prazerosa ao estudante, poderosa
                    e flexível para o educador e ainda permitir total controle e
                    proteção ao franqueador de sua propriedade intelectual.{' '}
                  </p>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-vector rounded mr-3 icon icon-color-1"></span> */}
                      <h5 className="mb-0">Experiência</h5>
                    </div>
                    <p>
                      Com 20 anos de experiência na criação de materiais
                      digitais, jogos e outras aplicações para o universo FISK,
                      PBF, Wizard, Skill e outras, a MBR é a melhor escolha para
                      criação de projetos tecnológico-didáticos, pois temos
                      profundo conhecimento das dores e anseios e da exigência
                      de seus clientes/alunos e profissionais de pedagogia e
                      tecnologia.
                    </p>
                  </div>
                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <h5 className="mb-0">Objetivos</h5>
                    </div>
                    <p>
                      Mantermo-nos atualizados tecnologicamente é um exercício
                      diário para a MBR. Fomos uma das primeiras empresas do
                      Brasil a utilizar a plataforma de desenvolvimento Unity e
                      nossos profissionais estão sempre pesquisando novas
                      técnicas e tecnologias. Com equipe de desenvolvimento
                      PRÓPRIA, localizada no interior de São Paulo a cerca de
                      150 km do centro da Capital, a MBR tem um excelente
                      custo-benefício para desenvolvimento de softwares. Pelo
                      fato de as principais ferramentas empregadas na didática
                      das escolas também terem sido desenvolvidas pela MBR,
                      podemos garantir que nosso projeto terá a melhor
                      aderência, melhor transparência, melhor aceitação pelos
                      alunos e professores e melhor conectividade com todo
                      sistema tecnológico de ensino do Brasil.
                    </p>
                  </div>
                  <a href="/#" className="btn solid-btn mt-2">
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
            
                    src="img/front-image.jpg"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default About
