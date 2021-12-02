export default class TokenStorage {
  TOKEN: string;

  constructor() {
    this.TOKEN = 'token';
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  deleteToken() {
    localStorage.clear();
  }
}
