export default function requestApi({
  BASE_URL, path = '', method = 'GET', headers, body = null, token = '',
}) {
  return fetch(`${BASE_URL}/${path}`, {
    method,
    headers,
    body: body && JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error(`${res.json().message}`));
      }
      return res.json();
    });
};
