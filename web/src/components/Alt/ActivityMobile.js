import React, { useState } from "react";
import _data from "../../data";

function ActivityMobile(props) {
  const background = props;
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <div className="container magic-club-font">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center">
              <p>
                <img
                  src="img/games/alt/activity-boy.png"
                  alt="Books"
                  className="img-fluid"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityMobile;
