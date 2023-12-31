import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 cards">
        <div
          className="card"
          style={{ borderColor: this.props.Time ? "white" : "" }}
        >
          <div className="card-header">
            <img
              style={{ maxWidth: "100%" }}
              src={this.props.img}
              alt={this.props.name}
            />
          </div>
          <div className="card-body">
            <h2>{this.props.name}</h2>
            <h5>{this.props.name}</h5>
            
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;


