import React from 'react'

function Video() {
  return (
    <>
      <section className="bg-image background-img intro-video">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="video-promo-content mt-3 text-center">
                <a
                  href="https://player.vimeo.com/video/299432146"
                  className="popup-youtube video-play-icon d-inline-block"
                >
                  <span className="ti-control-play"></span>{' '}
                </a>
                <h5 className="mt-4 text-white">Confira nosso vídeo</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
