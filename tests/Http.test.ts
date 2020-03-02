import Http, { HttpMethod } from "../src/Http";
import HttpError from "../src/HttpError";

describe("Http", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should instantiate", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");

    expect(http).toBeInstanceOf(Http);
  });

  it("should perform a request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";

    http.request(HttpMethod.GET, uri);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "GET",
      headers: {
        Authorization: `Bearer MY_API_TOKEN`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should catch response errors and throw a HttpError", async () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";

    fetchMock.mockResponseOnce("", {
      status: 500
    });

    await expect(http.get(uri)).rejects.toBeInstanceOf(HttpError);
  });

  it("should perform a HEAD request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";

    http.head(uri);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "HEAD",
      headers: {
        Authorization: "Bearer MY_API_TOKEN",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform an OPTIONS request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";

    http.options(uri);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "OPTIONS",
      headers: {
        Authorization: "Bearer MY_API_TOKEN",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform a GET request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";

    http.get(uri);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "GET",
      headers: {
        Authorization: `Bearer MY_API_TOKEN`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform a POST request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "testing";
    const body = JSON.stringify({ foo: "bar" });

    http.post(uri, body);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "POST",
      body: '{"foo":"bar"}',
      headers: {
        Authorization: `Bearer MY_API_TOKEN`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform a PUT request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";
    const body = JSON.stringify({ foo: "bar" });

    http.put(uri, body);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "PUT",
      body: '{"foo":"bar"}',
      headers: {
        Authorization: "Bearer MY_API_TOKEN",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform a PATCH request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";
    const body = JSON.stringify({ foo: "bar" });

    http.patch(uri, body);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "PATCH",
      body: '{"foo":"bar"}',
      headers: {
        Authorization: "Bearer MY_API_TOKEN",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });

  it("should perform a DELETE request", () => {
    const http = new Http("https://test.gitrevue.io", "MY_API_TOKEN");
    const uri = "/testing";
    const body = JSON.stringify({ foo: "bar" });

    http.delete(uri, body);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/api/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "DELETE",
      body: '{"foo":"bar"}',
      headers: {
        Authorization: "Bearer MY_API_TOKEN",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });
});
