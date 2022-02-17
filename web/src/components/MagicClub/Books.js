import React, { useState } from "react";
import _data from "../../data";

function Books(props) {
  const background = props
  return (
    <>
      <section
        id="screenshots"
        className={"screenshots-section ptb-100 " + background}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center">
                <h2>
                  LIVROS DIDÁTICOS
                  <br />
                </h2>
                <p className="lead">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less .

                  Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.
                </p>
                <p>
                <img
                    src="img/games/magic-club/books.png"
                    alt="Books"
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

export default Books;
