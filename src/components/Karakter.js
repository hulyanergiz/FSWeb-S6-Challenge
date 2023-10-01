import React from "react";
import Akordeon from "./Akordeon";

function Karakter(props) {
  const { karakter, filmler } = props;
  return (
    <Akordeon title={karakter.name}>
      <div className="karakter-card">
        <ul>
          <li>Height: {karakter.height}</li>
          <li>Mass: {karakter.mass}</li>
          <li>Hair Color: {karakter.hair_color}</li>
          <li>Skin Color: {karakter.skin_color}</li>
          <li>Eye Color: {karakter.eye_color}</li>
          <li>Birth Year: {karakter.birth_year}</li>
          <li>Gender: {karakter.gender}</li>
          <li>Appears in: {karakter.films.length} movies</li>
        </ul>
        {karakter.films.map((filmTitle) => {
          return (
            <Akordeon title={filmTitle}>
              {filmler.length > 0 && (
                <ul>
                  <li>
                    {filmler.find((m) => m.title === filmTitle).release_date}
                  </li>
                  <li>
                    {filmler.find((m) => m.title === filmTitle).opening_crawl}
                  </li>
                </ul>
              )}
            </Akordeon>
          );
        })}
      </div>
    </Akordeon>
  );
}

export default Karakter;
