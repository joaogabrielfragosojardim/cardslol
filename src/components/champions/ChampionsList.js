import React, { Component } from "react";
import axios from "axios";

import ChampionCard from "./ChampionCard";

export default class championsList extends Component {
  state = {
    url: "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion.json",
    champion: null,
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ champion: res.data["data"] });
    this.setState({ champion: Object.entries(this.state.champion) });
    this.state.champion.map((champion) => {
      champion.shift();
      this.state.champion = champion;
    });
  }

  render() {
    return (
      <div>
   {/*      {this.state.champion ? (
          <div>
            {this.state.champion.map((champion) => (
              <ChampionCard />
            ))}
          </div>
        ) : ( 
          <h1>Loadin...</h1>
        )} */}
      </div>
    );
  }
}
