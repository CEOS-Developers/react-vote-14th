import TokenStorage from '../db/token';
import HttpClient from '../http/httpClient';

export default class AuthService {
  http: HttpClient;
  tokenStorage: TokenStorage;

  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(id: string, email: string, password: string) {
    const data = await this.http.fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ userid: id, email: email, password: password }),
    });
  }

  async login(id: string, password: string) {
    const data = await this.http.fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ userid: id, password: password }),
    });
    this.tokenStorage.saveToken(data.token);
  }

  async logout() {
    this.tokenStorage.deleteToken();
  }
}
