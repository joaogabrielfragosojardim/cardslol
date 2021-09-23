import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function FechApi() {
  const { data, error } = useSWR(
    "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/pt_BR/champion.json",
    fetcher
  );

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(error);

  let dataObject = Object.entries(data);
  dataObject = dataObject[3][1];
  dataObject = Object.entries(dataObject);

  function turnObject(champ) {
    return champ[1];
  }

  function nameDescription(champ) {
    return {
      name: champ.name,
      title: champ.title,
      desciption: champ.blurb,
      id: champ.id,
    };
  }

  let objectChamp = dataObject.map(turnObject);
  objectChamp = objectChamp.map(nameDescription);

  return (
    <div className="gridChamps">
      {objectChamp.map((champ) => (
        <div key={champ.id} className="champCard">
          <div className="imgChampContainer">
            <img
              src={
                "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
                champ.id +
                "_0.jpg"
              }
              alt={champ.name}
              className="champImg"
            ></img>
          </div>

          <div className="championTags">
            <h2>{champ.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FechApi;
