export default class HttpClient {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async fetch(url: string, options: any) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    return res.json();
  }
}
