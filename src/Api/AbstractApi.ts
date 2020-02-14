import Http from "../Http";

export interface ResourceCollection<Entity> {
  data: Entity[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: bigint;
    last_page: number;
    path: string;
    per_page: number;
    to: bigint;
    total: bigint;
  };
}

abstract class AbstractApi {
  protected readonly http: Http;

  constructor(http: Http) {
    this.http = http;
  }
}

export default AbstractApi;
