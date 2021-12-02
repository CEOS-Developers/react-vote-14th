import TokenStorage from '../db/token';
import HttpClient from '../http/httpClient';

export default class VoteService {
  http: HttpClient;
  tokenStorage: TokenStorage;

  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async vote(id: number) {
    const token = this.tokenStorage.getToken();
    const data = await this.http.fetch(
      `${this.http.baseURL}/users/vote/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: {},
        },
      }
    );
  }
}
