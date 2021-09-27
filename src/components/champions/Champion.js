import React, { Component } from "react";
import axios from "axios";

export default class Champion extends Component {
  state = {
    name: "",
    championIndex: "",
    imgUrl: "",
  };

  async componentDidMount() {
    let championObject = [];

    const { championIndex } = this.props.match.params;

    const championUrl = `https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion/${championIndex}.json`;

    const championRes = await axios.get(championUrl);
    let champions = championRes.data["data"];
    champions = Object.entries(champions);
    champions.map((champion) => {
      championObject.push(champion[1]);
    });

    this.setState({ name: championObject[0].id });
    this.setState({
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championObject[0].id}_0.jpg`,
    });
  }
  render() {
    return (
      <div>
        <img src={this.state.imgUrl}></img>
      </div>
    );
  }
}
