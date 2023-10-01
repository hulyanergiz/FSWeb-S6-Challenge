import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [karakterler, setKarakterler] = useState([]);
  const [filmler, setFilmler] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  function getKarakterler() {
    return axios.get("https://swapi.dev/api/people/");
  }
  function getFilmler() {
    return axios.get("https://swapi.dev/api/films/");
  }
  useEffect(() => {
    console.log("Veri yükleniyor");
    setLoading(true);
    setError(null);
    Promise.all([getKarakterler(), getFilmler()])
      .then(function ([chars, movs]) {
        console.log("Veri yüklendi");
        setLoading(false);
        setError(null);
        setKarakterler(chars.data);
        setFilmler(movs.data[0].results);
      })
      .catch(function (error) {
        console.log("Veri yüklemesinde axios error");
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && karakterler.length > 0 && (
        <>
          <h1 className="Header">REACT WARS</h1>
          <div className="karakter-container">
            {karakterler.map((karakter) => (
              <>
                <Karakter karakter={karakter} filmler={filmler} />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
