import { OnePhaseClient } from "../clients/OnePhaseClient";
import { ClientConfig } from "../models/ClientConfig";

export class ClientProvider {
  static getOnePhaseClient = (config: ClientConfig) =>
    new OnePhaseClient(config);
}
