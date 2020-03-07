import Http from "./Http";
import Artifacts from "./Api/Artifacts";

export interface Config {
  token: string;
  url: string;
}

class GitRevue {
  protected readonly config: Config;

  protected readonly http: Http;

  public readonly artifacts: Artifacts;

  constructor(config: Config) {
    this.config = config;

    this.http = new Http(this.config.url, this.config.token);
    this.artifacts = new Artifacts(this.http);
  }
}

export default GitRevue;
