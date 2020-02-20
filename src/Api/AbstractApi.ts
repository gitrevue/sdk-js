import Http from "../Http";

abstract class AbstractApi {
  protected readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }
}

export default AbstractApi;
