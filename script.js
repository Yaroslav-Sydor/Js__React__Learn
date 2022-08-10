const numberOfFilms = +prompt('How match films are you see?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('One of the last you films?', ''),
      b = prompt('How do you like it?', ''),
      c = prompt('One of the last you films?', ''),
      d = prompt('How do you like it?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);