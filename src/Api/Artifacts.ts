import { Response } from "node-fetch";
import AbstractApi from "./AbstractApi";

export interface Artifact {
  path: string;
  bytes: number;
}

enum ArtifactCode {
  CSS = 1,
  JAVASCRIPT = 2,
  IMAGE = 3,
  OTHER = 100
}

enum ArtifactName {
  CSS = "CSS",
  JAVASCRIPT = "JavaScript",
  IMAGE = "Image",
  OTHER = "Other"
}

export interface ArtifactResource {
  id: number;
  commit: string;
  type: {
    code: ArtifactCode;
    name: ArtifactName;
  };
  path: string;
  bytes: number;
}

class Artifacts extends AbstractApi {
  create(
    repository: string,
    commit: string,
    artifacts: Artifact[]
  ): Promise<ArtifactResource[]> {
    const body = JSON.stringify({
      repository,
      commit,
      artifacts
    });

    return this.http.post("/artifacts", body).then(r => r.json());
  }
}

export default Artifacts;
