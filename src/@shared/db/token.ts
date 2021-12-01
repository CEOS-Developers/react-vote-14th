export default class TokenStorage {
  TOKEN: string;

  constructor() {
    this.TOKEN = 'token';
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken(token: string) {
    localStorage.getItem(this.TOKEN);
  }

  deleteToken(token: string) {
    localStorage.clear();
  }
}
