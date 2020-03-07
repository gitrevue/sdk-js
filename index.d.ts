// Type definitions for @gitrevue/sdk v1
// Project: @gitrevue
// Definitions by: Wade Urry <https://iwader.co.uk/>

declare module "@gitrevue/sdk" {
  export interface Config {
    token: string;
    url: string;
  }

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

  interface ArtifactResource {
    id: number;
    commit: string;
    type: {
      code: ArtifactCode;
      name: ArtifactName;
    };
    path: string;
    bytes: number;
  }

  class Artifacts {
    create(
      repository: string,
      commit: string,
      artifacts: Artifact[],
      pullRequest: number | void
    ): Promise<ArtifactResource[]>;
  }

  class GitRevue {
    public readonly artifacts: Artifacts;

    constructor(config: Config);
  }

  export default GitRevue;
}
