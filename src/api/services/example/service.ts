import { APIResponse } from "@types";
import API from "../..";
import { GetExample } from "./entity";


export default class BalanceServices {
  basePath: string = "/balance";
  private api: API = new API();

  async get() {
    const targetPath = this.basePath;
    const res: APIResponse<GetExample> = await this.api.GET(targetPath);
    return res;
  }
}
