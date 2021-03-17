export function toFormatMovie(movies, BASE_URL) {
  return movies.map((movie) => {
    const formattedMovie = {
      ...movie,
      movieId: movie.id,
      image: movie.image ? (BASE_URL + movie.image.url) : '',
      thumbnail: movie.image ? (BASE_URL + movie.image.formats.thumbnail.url) : '',
      trailer: movie.trailerLink,
    };

    return formattedMovie;
  });
}

export function searchMovie(movies, keyword = '', isIncludesShort) {
  const minDuration = isIncludesShort ? 0 : 40;

  return movies.filter(
    (movie) => (keyword ? movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) : true)
      && movie.duration > minDuration,
  );
}
