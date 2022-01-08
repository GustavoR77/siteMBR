import React, { useState } from "react";
import _data from "../../data";

function Admins() {
  const [admins, setAdmins] = useState(_data.teamMembersAdmins.members);
  console.log(admins);

  return (
    <>
      {admins.map((member, index) => {
        return (
          <div className="item single-client" key={index}>
            <img src={member} alt="client logo" className="client-img" />
          </div>
        );
      })}

      {/*
      <div className="owl-theme team-carousel">
      <div className="item single-client">
        {Object.keys(admins).map((keyName, i) => (
          <img className="client-img" src={admins[keyName]} alt="team-member"></img>
        ))}
      </div>
        </div> */}
    </>
  );
}

export default Admins;
