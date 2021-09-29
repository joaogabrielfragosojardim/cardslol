import React, { Component } from "react";
import axios from "axios";

export default class Champion extends Component {
  state = {
    name: "",
    championIndex: "",
    imgUrl: "",
    title: "",
    lore: "",
    attack: "",
    defense: "",
    magic: "",
    difficulty: "",
  };

  async componentDidMount() {
    let championObject = [];

    const { championIndex } = this.props.match.params;

    const championUrl = `https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion/${championIndex}.json`;

    const championRes = await axios.get(championUrl);
    let champions = championRes.data["data"];
    champions = Object.entries(champions);
    champions.map((champion) => {
      return championObject.push(champion[1]);
    });

    this.setState({ name: championObject[0].name });
    this.setState({
      imgUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championObject[0].id}_0.jpg`,
    });
    this.setState({ title: championObject[0].title });
    this.setState({ lore: championObject[0].lore });
    this.setState({ attack: championObject[0].info.attack });
    this.setState({ defense: championObject[0].info.defense });
    this.setState({ magic: championObject[0].info.magic });
    this.setState({ difficulty: championObject[0].info.difficulty });
  }
  render() {
    return (
      <div>
        <div
          className="championBanner"
          style={{
            backgroundImage: `linear-gradient(265deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 100%), url(${this.state.imgUrl})`,
          }}
        >
          <div className="championInformations">
            <img src={this.state.imgUrl} alt={this.state.championIndex}></img>
            <div className="containerTextInformation">
              <h3>{this.state.title}</h3>
              <h2>{this.state.name}</h2>
            </div>
          </div>
        </div>
        <div className="loreStats">
          <div className="container p-5 d-flex">
            <div className="stats p-2 w-50">
              <div className="statsBar">
                <div
                  className="statsInfo atk"
                  style={{
                    width: this.state.attack * 10 + "%",
                  }}
                ></div>
              </div>
              <div className="statsBar">
                <div
                  className="statsInfo dfs"
                  style={{
                    width: this.state.defense * 10 + "%",
                  }}
                ></div>
              </div>
              <div className="statsBar">
                <div
                  className="statsInfo mgc"
                  style={{
                    width: this.state.magic * 10 + "%",
                  }}
                ></div>
              </div>
              <div className="statsBar">
                <div
                  className="statsInfo dfy"
                  style={{
                    width: this.state.difficulty * 10 + "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="lore w-50">
              <p>{this.state.lore}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
