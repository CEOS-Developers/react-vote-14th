export default class AuthService {
  http: {};
  tokenStorage: {};

  constructor(http: {}, tokenStorage: {}) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
}
