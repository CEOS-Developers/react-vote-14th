import TokenStorage from '../db/token';
import HttpClient from '../http/httpClient';

export default class VoteService {
  http: HttpClient;
  tokenStorage: TokenStorage;

  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async vote(id: string) {
    const token = this.tokenStorage.getToken();
    const data = await this.http.fetch(`/api/users/vote/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `jwt ${token}`,
      },
    });
    return data;
  }

  async fetchCandidates() {
    const data = await this.http.fetch(`/api/candidates`, {
      method: 'GET',
    });
    return data;
  }
}
