import React from 'react'

function HeroSection() {
  return (
    <>
      <section
        className="hero-section background-img-magicclub"
        style={{
          backgroundImage: "url('img/games/magic-club/BG-magic-club.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
        }}
      >
        <div className="magicclub-section-wrap">
          <div className="magicclub-section-overly ptb-100 full-screen">
            <div
              className="player"
              data-property="{videoURL:'',containment:'.magicclub-section-wrap', quality:'highres', autoPlay:true, showControls: false, startAt:0, mute:true, opacity: 1}"
            ></div>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8 col-lg-7">

                </div>
              </div>

              <div className="row justify-content-between d-flex align-content-end flex-wrap mt-5">
                <div className="col-md-12 ">
                  <div className="client-section-wrap d-flex flex-row align-items-center">
    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
