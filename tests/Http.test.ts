import Http, { HttpMethod } from "../src/Http";

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
    const body = JSON.stringify({ foo: "bar" });

    fetchMock.mockResponseOnce(JSON.stringify({ bar: "foo" }));

    http.request(HttpMethod.GET, uri, body);

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual(
      "https://test.gitrevue.io/testing"
    );
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: "GET",
      body: '{"foo":"bar"}',
      headers: {
        Authorization: `Bearer MY_API_TOKEN`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  });
});
