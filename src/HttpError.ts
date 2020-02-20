import { Response } from "node-fetch";

class HttpError {
  private response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  status(): number {
    return this.response.status;
  }

  body(): Promise<string> {
    return this.response.text();
  }
}

export default HttpError;
