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
                    Nós da MBR acreditamos na educação interativa e lúdica, para
                    isso, produzimos softwares fáceis de usar, atraentes e
                    divertidos há 25 anos. Nosso dia-a-dia é criar soluções para
                    uso da tecnologia em aplicações didáticas para todas as
                    idades mesclando tecnologia, design e arte para tornar o
                    aprendizado uma experiência prazerosa ao estudante, poderosa
                    e flexível para o educador e ainda permitir total controle e
                    proteção ao franqueador de sua propriedade intelectual.
                    Nosso dia-a-dia é criar soluções pedagógicas inovadoras para
                    que estudantes de todo o mundo se divirtam enquanto
                    aprendem. Para isso usamos e criamos tecnologias e
                    aplicações inovadoras, fáceis de usar e atraentes para que
                    pessoas auditivas, visuais, cinestésicas e digitais sejam
                    alcançadas.{' '}
                  </p>
                  <p>
                    Com 25 anos de experiência na criação de materiais digitais,
                    jogos de ação com finalidade didática, plataformas de
                    ensino, e-books com tecnologia Life+, livros interativos com
                    tecnologia QR Code e realidade aumentada, além de milhares
                    de jogos e dezenas de horas de desenhos animados com cunho
                    pedagógico e outras aplicações para o universo FISK, PBF,
                    Skill e Wizard, a MBR é a melhor escolha para criação de
                    projetos tecnológico-didáticos, pois temos profundo
                    conhecimento das dores e anseios e da exigência de seus
                    clientes/alunos e profissionais de pedagogia e tecnologia.
                    Com equipe de desenvolvimento PRÓPRIA, localizada no
                    interior de São Paulo a cerca de 150 km do centro da
                    Capital, a MBR tem um excelente custo-benefício para
                    desenvolvimento de softwares.{' '}
                  </p>

                  <div className="single-feature mb-4">
                    <div className="d-flex align-items-center mb-2">
                      {/* <span className="ti-vector rounded mr-3 icon icon-color-1"></span> */}
                      <h5 className="mb-0">NOSSA MISSÃO</h5>
                    </div>
                    <p>
                      Causar uma experiência de aprendizagem única, lúdica e
                      divertida, através de tecnologia inovadora para milhões de
                      pessoas.
                    </p>
                  </div>
                  <a href="/#" className="btn solid-btn mt-2">
                    Saiba mais
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content-right ml-5">
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
