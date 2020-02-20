import Http from "./Http";
import Assets from "./Api/Assets";

export interface Config {
  token: string;
  url: string;
}

class GitRevue {
  protected readonly config: Config;

  protected readonly http: Http;

  public readonly assets: Assets;

  constructor(config: Config) {
    this.config = config;

    this.http = new Http(this.config.url, this.config.token);
    this.assets = new Assets(this.http);
  }
}

export default GitRevue;
