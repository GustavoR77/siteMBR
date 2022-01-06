import React, { useState } from "react";
import _data from "../../data";

class TeamMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembersAdmins: [],
      teamMembersDesigners: [],
      teamMembersArts: [],
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */

    this.setState({
      teamMembersAdmins: _data.teamMembersAdmins,
      teamMembersDesigners: _data.teamMembersDesigners,
      teamMembersArts: _data.teamMembersArts
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className={"client-section ptb-100 " + (this.props.bgColor && this.props.bgColor === 'gray' ? 'gray-light-bg' : '')}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>{this.state.teamMembersAdmins.title}</h2>
                  <p className="lead">
                    {this.state.teamMembersAdmins.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme team-carousel">
                  {(this.state.teamMembersAdmins.members || []).map(
                    (member, index) => {
                      return (
                        <div className="item single-client" key={index}>
                          <img
                            src={member}
                            alt="client logo"
                            className="client-img"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <p className="lead">
                    {this.state.teamMembersDesigners.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme team-carousel">
                  {(this.state.teamMembersDesigners.members || []).map(
                    (member, index) => {
                      return (
                        <div className="item single-client" key={index}>
                          <img
                            src={member}
                            alt="client logo"
                            className="client-img"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <p className="lead">
                    {this.state.teamMembersArts.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme team-carousel">
                  {(this.state.teamMembersArts.members || []).map(
                    (member, index) => {
                      return (
                        <div className="item single-client" key={index}>
                          <img
                            src={member}
                            alt="client logo"
                            className="client-img"
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TeamMembers;
