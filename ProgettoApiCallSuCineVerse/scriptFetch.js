import { apiCallCineVerse } from "./apiCallCineVerse.js";
import { API_KEY } from "./key.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

const catMovieList = document.getElementById("catMovieList");

// FILM  //
async function fetchGenresMovies() {
  const data = await apiCallCineVerse(url, options);

  if (!data || !data.genres) {
    console.error("Errore nel caricamento dei generi film");
    return;
  }

  data.genres.forEach((genre) => {
    const div = document.createElement("div");
    div.classList.add("cards");
    div.innerHTML = `<h3>${genre.name}</h3>`;
    catMovieList.appendChild(div);
  });
}

fetchGenresMovies();
