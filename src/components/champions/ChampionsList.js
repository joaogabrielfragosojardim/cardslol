import React, { Component } from "react";
import axios from "axios";

import ChampionCard from "./ChampionCard";

export default class championsList extends Component {
  state = {
    url: "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion.json",
    champion: null,
  };

  async componentDidMount() {
    let championsObject = [];
    const res = await axios.get(this.state.url);
    let champions = res.data["data"];
    champions = Object.entries(champions);
    champions.map((champion) => {
      championsObject.push(champion[1]);
    });

    this.setState({ champion: championsObject });
  }

  render() {
    return (
      <div>
        {this.state.champion ? (
          <div>
            {this.state.champion.map((champion) => (
              <ChampionCard
                name={champion.name}
                url={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                id={champion.id}
                key={champion.id}
              />
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
