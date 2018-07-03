import axios from 'axios';

class SpotifyApi {
  private static readonly SPOTIFY_AUTHORIZATION_URI = 'https://accounts.spotify.com/api/token';
  private clientId: string;
  private clientSecret: string;
  private tokenPromise: Promise<string|null>;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tokenPromise = this.getAccessToken();
  }

  public async test() {
    const x = await this.tokenPromise;
    console.log(x);
    return 'sdfsdf';
  }

  private getAccessToken() {
    const config = { headers: { Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret) }, withCredentials: false };
    const params = { grant_type: 'client_credentials' };
    return axios.post(SpotifyApi.SPOTIFY_AUTHORIZATION_URI, params, config).then((r) => r.data).catch((e) => null);
  }
}

const spotifyApiSingleton = new SpotifyApi('sdfsdf', 'sdfsdfsdf');
export default spotifyApiSingleton;
