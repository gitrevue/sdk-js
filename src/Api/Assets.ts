import AbstractApi from "./AbstractApi";

export interface Asset {
  path: string;
  bytes: bigint;
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

export interface AssetResource {
  id: bigint;
  commit: string;
  type: {
    code: AssetCode;
    name: AssetName;
  };
  path: string;
  bytes: bigint;
}

class Assets extends AbstractApi {
  create(
    repository: string,
    commit: string,
    assets: Asset[]
  ): Promise<AssetResource[]> {
    const body = JSON.stringify({
      repository,
      commit,
      assets
    });

    return this.http
      .post("/assets", body)
      .then(r => r.json())
      .catch(err => {
        throw err;
      });
  }
}

export default Assets;
