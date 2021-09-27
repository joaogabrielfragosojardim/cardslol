import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class championCard extends Component {
  state = {
    name: "",
    imgUrl: "",
    id: "",
  };
  render() {
    const name = this.props.name;
    const imgUrl = this.props.imgUrl;
    const id = this.props.id;
    return (
      <Link to={`/${id}`}>
        <div key={id} className="champCard">
          <div className="imgChampContainer">
            <img src={imgUrl} alt={name} className="champImg"></img>
          </div>
          <div className="championTags">
            <h2 className="championName">{name}</h2>
          </div>
        </div>
      </Link>
    );
  }
}
