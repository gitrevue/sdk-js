import HttpError from "../src/HttpError";
import { Response } from "node-fetch";

describe("HttpError", () => {
  it("should instantiate", () => {
    const err = new HttpError(new Response(null, { status: 500 }));

    expect(err).toBeInstanceOf(HttpError);
  });

  it("should return the response's status code", () => {
    const err = new HttpError(new Response(null, { status: 500 }));

    expect(err.status()).toEqual(500);
  });
});
