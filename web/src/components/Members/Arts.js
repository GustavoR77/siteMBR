import React, { useState } from "react";
import _data from "../../data";

function Arts() {
  const [arts, setArts] = useState(_data.teamMembersArts.members);

  return (
    <>
      {arts.map((member, index) => {
        return (
          <div className="item single-client" key={index}>
            <img src={member} alt="client logo" className="client-img" />
          </div>
        );
      })}
    </>
  );
}

export default Arts;
