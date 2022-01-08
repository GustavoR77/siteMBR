import React, { useState, useEffect } from "react";
import _data from "../../data";
import Admins from "./Admins";
import Developers from "./Developers";
import Arts from "./Arts";
import Carousel from "./Carousel";

function TeamMembers2() {
  const [department, setDepartment] = useState("admin");

  useEffect(() => {
    console.log(department);
  },[department]
  );

  return (
    <>
      <section className={"client-section ptb-100 blue-gray2-bg"}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Nosso time</h2>
                <p className="lead" onClick={() => setDepartment("admin")}>
                  Admins
                </p>
                <p className="lead" onClick={() => setDepartment("developers")}>
                  Developers
                </p>
                <p className="lead" onClick={() => setDepartment("arts")}>
                  Arts
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              
                
            <Carousel estilo={{opacity: department === "admin" ? "1" : "0", transition: "opacity 1s linear"}} data={_data.teamMembersAdmins.members}/>
                <Carousel estilo={{opacity: department === "developers" ? "1" : "0", transition: "opacity 1s linear"}} data={_data.teamMembersDevelopers.members}/>
                <Carousel estilo={{opacity: department === "arts" ? "1" : "0", transition: "opacity 1s linear"}} data={_data.teamMembersArts.members}/>
                
                
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamMembers2;
