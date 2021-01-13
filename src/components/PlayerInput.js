import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlayer } from "../actions/addPlayer";
import Button from "../components/Button";

class PlayerInput extends Component {
  state = {
    name: "",
    school: "",
    year: "",
    video_link: "",
    scout: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state);
    this.setState({
      name: "",
      school: "",
      year: "",
      video_link: "",
      scout: "",
    });
  };

  render() {
    return (
      <div>
        {/* <label>Add a Player</label> */}
        <br />
        <form class="newnewnew" onSubmit={this.handleSubmit}>
          {/* <label>Add Player</label> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="school"
            placeholder="School"
            value={this.state.school}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="video_link"
            placeholder="Video Link"
            value={this.state.video_link}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            name="scout"
            placeholder="Scout"
            value={this.state.scout}
            onChange={this.handleChange}
          />
          <br />
          <input class="btn-two" type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addPlayer })(PlayerInput);
