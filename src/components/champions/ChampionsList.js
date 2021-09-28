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
      return championsObject.push(champion[1]);
    });

    this.setState({ champion: championsObject });
  }

  render() {
    return (
      <div>
        {this.state.champion ? (
          <div className="gridChamps">
            {this.state.champion.map((champion) => {
              return (
                <ChampionCard
                  name={champion.name}
                  imgUrl={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                  id={champion.id}
                  key={champion.id}
                  alt={champion.name}
                />
              );
            })}
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center fullScreen">
            <div
              className="spinner-border text-secondary"
              role="status"
              style={{ width: 100 + "px", height: 100 + "px" }}
            >
              <span className="sr-only"></span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
