import TokenStorage from '../db/token';
import HttpClient from '../http/httpClient';

export default class AuthService {
  http: HttpClient;
  tokenStorage: TokenStorage;

  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(
    id: string | undefined,
    email: string | undefined,
    password: string | undefined
  ) {
    const data = await this.http.fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ userid: id, email: email, password: password }),
    });
  }

  async login(id: string | undefined, password: string | undefined) {
    const data = await this.http.fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userid: id, password: password }),
    });
    try {
      if (data.token) {
        this.tokenStorage.saveToken(data.token);
        return data;
      }
    } catch (error) {
      // 추후 에러 처리 로직 보강
    }
  }

  async logout() {
    this.tokenStorage.deleteToken();
  }

  getToken() {
    return this.tokenStorage.getToken();
  }
}
