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
    if (res.ok) {
      return res.json();
    } else {
      const message = JSON.stringify(res.status);
      alert('잘못된 접근입니다.');
    }
  }
}
