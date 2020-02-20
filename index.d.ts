// Type definitions for @gitrevue/sdk v1
// Project: @gitrevue
// Definitions by: Wade Urry <https://iwader.co.uk/>

declare module "@gitrevue/sdk" {
  export interface Config {
    token: string;
    url: string;
  }

  export interface Asset {
    path: string;
    bytes: number;
  }

  enum AssetCode {
    CSS = 1,
    JAVASCRIPT = 2,
    IMAGE = 3,
    OTHER = 100
  }

  enum AssetName {
    CSS = "CSS",
    JAVASCRIPT = "JavaScript",
    IMAGE = "Image",
    OTHER = "Other"
  }

  interface AssetResource {
    id: number;
    commit: string;
    type: {
      code: AssetCode;
      name: AssetName;
    };
    path: string;
    bytes: number;
  }

  class Assets {
    create(
      repository: string,
      commit: string,
      assets: Asset[]
    ): Promise<AssetResource[]>;
  }

  class GitRevue {
    public readonly assets: Assets;

    constructor(config: Config);
  }

  export default GitRevue;
}
