import { Response } from "node-fetch";

class HttpError {
  response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  get status(): number {
    return this.response.status;
  }
}

export default HttpError;
