import { apiCallCineVerse } from "./apiCallCineVerse.js";
import { API_KEY } from "./key.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

const API_BASE_URL = "https://api.themoviedb.org/3/genre";

const catMovieList = document.getElementById("catMovieList");
const catTvSeriesList = document.getElementById("catTvSeriesList");

// FILM  //
async function fetchGenres() {
  const movies = await apiCallCineVerse(
    `${API_BASE_URL}/movie/list?language=en`,
    options
  );

  const tvSeries = await apiCallCineVerse(
    `${API_BASE_URL}/tv/list?language=en`,
    options
  );

  if (!movies || !movies.genres) {
    console.error("Errore nel caricamento dei generi dei film");
    return;
  }

  if (!tvSeries || !tvSeries.genres) {
    console.error("Errore nel caricamento dei generi delle serie tv");
    return;
  }

  // film
  movies.genres.forEach((genre) => {
    const div = document.createElement("div");
    div.classList.add("cards");
    div.innerHTML = `<h3>${genre.name}</h3>`;
    catMovieList.appendChild(div);
  });

  // serie TV
  tvSeries.genres.forEach((genre) => {
    const div = document.createElement("div");
    div.classList.add("cards");
    div.innerHTML = `<h3>${genre.name}</h3>`;
    catTvSeriesList.appendChild(div);
  });
}
fetchGenres();

// Toggle Movie Categories
document.getElementById("Movies").addEventListener("click", () => {
  document.getElementById("Movies").classList.toggle("open");
});

// Toggle TV Series Categories
document.getElementById("TvSeries").addEventListener("click", () => {
  document.getElementById("TvSeries").classList.toggle("open");
});
