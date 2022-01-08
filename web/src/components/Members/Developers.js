import React, { useState } from "react";
import _data from "../../data";

function Developers() {
  const [developers, setDevelopers] = useState(
    _data.teamMembersDevelopers.members
  );

  return (
    <>
      {developers.map((member, index) => {
        return (
          <div className="item single-client" key={index}>
            <img src={member} alt="client logo" className="client-img" />
          </div>
        );
      })}
    </>
  );
}

export default Developers;
