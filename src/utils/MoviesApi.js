import requestApi from './requestApi';

export const BASE_URL = 'https://api.nomoreparties.co';
const headers = {
  'Content-Type': 'application/json; charset=utf-8',
}

export function getMovies(){
  return requestApi({ BASE_URL, path: 'beatfilm-movies', headers });
}
