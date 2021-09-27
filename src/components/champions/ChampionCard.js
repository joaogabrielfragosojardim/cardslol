import React, { Component } from "react";

export default class championCard extends Component {
  state = {
    name: "",
    imgUrl: "",
    id: "",
  };
  render() {
    const name = this.props.name;
    const imgUrl = this.props.url;
    const id = this.props.id;
    return (
      <div key={id} className="champCard">
        <div className="imgChampContainer">
          <img src={imgUrl} alt={name} className="champImg"></img>
        </div>
        <div className="championTags">
          <h2 className="championName">{name}</h2>
        </div>
      </div>
    );
  }
}
