

const numberOfFilms = +prompt('How many films you have watched?', '');


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

console.log(personalMovieDB);

const a = prompt('One of your recently watched movies?', '');
const b = +prompt('How do you rate this movie?', '');
const c = prompt('One of your recently watched movies?', '');
const d = +prompt('How do you rate this movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
