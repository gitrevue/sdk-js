import fetch, { BodyInit, Response } from "node-fetch";
import HttpError from "./HttpError";

export enum HttpMethod {
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

class Http {
  private readonly baseUrl: string;

  private readonly token: string;

  constructor(baseUrl: string, token: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  async request(
    method: HttpMethod,
    uri: string,
    body?: BodyInit | null
  ): Promise<Response> {
    const response = await fetch(
      `${this.baseUrl}/${uri.replace(/^[\/]+/, "")}`,
      {
        method,
        body,
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new HttpError(response);
    }

    return response;
  }

  head(uri: string): Promise<Response> {
    return this.request(HttpMethod.HEAD, uri);
  }

  options(uri: string): Promise<Response> {
    return this.request(HttpMethod.OPTIONS, uri);
  }

  get(uri: string): Promise<Response> {
    return this.request(HttpMethod.GET, uri);
  }

  post(uri: string, body?: BodyInit | null): Promise<Response> {
    return this.request(HttpMethod.POST, uri, body);
  }

  put(uri: string, body?: BodyInit | null): Promise<Response> {
    return this.request(HttpMethod.PUT, uri, body);
  }

  patch(uri: string, body?: BodyInit | null): Promise<Response> {
    return this.request(HttpMethod.PATCH, uri, body);
  }

  delete(uri: string, body?: BodyInit | null): Promise<Response> {
    return this.request(HttpMethod.DELETE, uri, body);
  }
}

export default Http;
