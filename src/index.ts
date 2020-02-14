import Http from "./Http";
import Assets from "./Api/Assets";

export interface Config {
  token: string;
  url: string;
}

class GitRevue {
  protected readonly config: Config;

  protected readonly http: Http;

  public readonly Assets: Assets;

  constructor(config: Config) {
    this.config = config;

    this.http = new Http(this.config.url, this.config.token);
  }
}

export default GitRevue;
