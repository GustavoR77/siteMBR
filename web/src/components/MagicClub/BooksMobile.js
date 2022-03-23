import React, { useState } from "react";
import _data from "../../data";

function BooksMobile(props) {
  const background = props;
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center h2-mobile-magicclub">
              <h2 className="magic-club-font">
                LIVROS{" "}
                <strong className="magic-club-font magic-club-subtitle">
                  DIDÁTICOS
                </strong>
                <br />
              </h2>
              <div className="text-white lead project-font lh-sm">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less .
                </p>
                <p>
                  <img
                    src="img/games/magic-club/books.png"
                    alt="Books"
                    className="img-fluid"
                  />
                </p>
                <p>
                  Normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksMobile;
