import requestApi from './requestApi';

export const BASE_URL = 'https://api.movie.students.nomoredomains.rocks';
// export const BASE_URL = 'http://localhost:3000';

export const headers = (token = '') => ({
  'Content-Type': 'application/json; charset=utf-8',
  'Authorization': `Bearer ${token}`,
});

export function register({ name, email, password }) {
  return requestApi({
    BASE_URL, path: 'signup', method: 'POST', headers: headers(), body: { name, email, password },
  });
}

export function login({ email, password }) {
  return requestApi({
    BASE_URL, path: 'signin', method: 'POST', headers: headers(), body: { email, password },
  });
}

export function getUserData(token) {
  return requestApi({
    BASE_URL, path: 'users/me', headers: headers(token),
  });
}

export function updateProfile({ name, email }, token) {
  return requestApi({
    BASE_URL, path: 'users/me', method: 'PATCH', headers: headers(token), body: { name, email },
  });
}

export function getMovies(token) {
  return requestApi({
    BASE_URL, path: 'movies', headers: headers(token),
  });
}

export function saveMovie({
  country, director, duration, year, description,
  image, trailer, thumbnail, nameRU, nameEN, movieId,
}, token) {
  return requestApi({
    BASE_URL,
    path: 'movies',
    method: 'POST',
    headers: headers(token),
    body: {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    },
  });
}

export function removeMovie({ movieId }, token) {
  return requestApi({
    BASE_URL, path: `movies/${movieId}`, method: 'DELETE', headers: headers(token),
  });
}
