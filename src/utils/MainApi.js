import { apiOptions } from './constant';

export default class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._credentials = options.credentials;
    }
    //Отправить запрос
    _sendRequest(path, parameters) {
        return fetch(`${this._url}${path}`, parameters).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
        });
    }
     // регистрация
    register(username, email, password) {
        return this._sendRequest(fetch(`${this._baseUrl}/signup`, {  
            method: 'POST',
            headers: this._headers,
            credentials: this._credentials,
            body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
            })
        }
        ))
    }
    //авторизация
    login(email, password) {
        return this._sendRequest(fetch(`${this._baseUrl}/signin`, {  
            method: 'POST',
            headers: this._headers,
            credentials: this._credentials,
            body: JSON.stringify({
            "email": email,
            "password": password
            })
        }
        ))
    }

    //провека токена
    checkToken(token) {
        return this._getResponseData(fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                ...this._headers,
                "Authorization" : `Bearer ${token}`
            }
        }
        ))
    }

    //Получить данные пользователя
    getUserInfo(token) {
        return this._sendRequest(`users/me`, {
            headers: {
                ...this._headers,
                authorization: `Bearer ${token}`
            },
        });
    }

}

export const api = new MainApi(apiOptions);