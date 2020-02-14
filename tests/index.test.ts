import GitRevue from "../src/index";

describe("GitRevue - index.ts", () => {
  it("should instantiate", () => {
    const config = {
      token: "MY_API_TOKEN",
      url: "https://test.gitrevue.io"
    };

    const gitrevue = new GitRevue(config);

    expect(gitrevue).toBeInstanceOf(GitRevue);
  });
});
