import Assets from "../../src/Api/Assets";
import Http from "../../src/Http";
import { Response } from "node-fetch";

jest.mock("../../src/Http");

describe("Api -> Assets", () => {
  beforeEach(() => {
    // @ts-ignore
    Http.mockClear();
  });

  it("should instantiate", () => {
    const assets = new Assets(
      new Http("https://test.gitrevue.io", "MY_API_TOKEN")
    );

    expect(assets).toBeInstanceOf(Assets);
  });

  it("should create an asset", async () => {
    const response = [
      {
        id: 9,
        team_id: 1,
        repository_id: 2,
        commit: "eaab845393476582058693c22554c6b90cf8e989",
        type: {
          code: 1,
          name: "CSS"
        },
        path: "/assets/app.css",
        bytes: 1000000
      }
    ];

    const postMock = jest.fn();
    postMock.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify(response), { status: 200 }))
    );
    Http.prototype.post = postMock;

    const assets = new Assets(
      new Http("https://test.gitrevue.io", "MY_API_TOKEN")
    );

    await expect(
      assets.create(
        "gitrevue/website",
        "eaab845393476582058693c22554c6b90cf8e989",
        [
          {
            path: "/assets/app.css",
            bytes: 1000000
          }
        ]
      )
    ).resolves.toEqual(response);
  });
});
