import axios from 'axios';
import SpotifyApi from './spotify-api';

export default class MucCore {
  public test(s: string) {
    return s + ' I added something';
  }

  public google() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1').then((r) => r.data).catch((e) => null);
  }

  public bing() {
    return axios.get('https://jsonplacehold34534543er.typicode.com/posts/2').then((r) => r.data).catch((e) => null);
  }

  public another() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/34').then((r) => r.data).catch((e) => null);
  }

  public getAll() {
    const promises = [this.google(), this.bing(), this.another()];
    return Promise.all(promises).then((results) => {
      return results.filter((v) => v !== null);
    });
  }

  public async getAllAsync() {
    SpotifyApi.test();
    const requests = [this.google(), this.bing(), this.another()];
    const results = await Promise.all(requests);
    return results.filter((v) => v !== null);
  }
}
