import React, { Component } from "react";

export default class championCard extends Component {
  state = {
    name: "",
    imgUrl: "",
    id: "",
  };
  render() {
    const name = this.props.name;
    const imgUrl = this.props.url
    return (
      <div>
        <h1>{name}</h1>
        <img src={this.props.url}></img>
      </div>
    );
  }
}
