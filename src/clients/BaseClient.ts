import axios from "axios";
import { Endpoints } from "../config/endpoints";
import { ClientConfig } from "../models/ClientConfig";
import { GetOrderStatusRequest } from "../models/requests/GetOrderStatusRequest";
import { GetOrderStatusResponse } from "../models/responses/GetOrderStatusResponse";

export class BaseClient {
  config: ClientConfig;

  constructor(config: ClientConfig) {
    this.config = config;
  }

  protected hasError = (errorCode?: string) => errorCode && errorCode != "0";

  getOrderStatus = (request: GetOrderStatusRequest) =>
    axios
      .get(Endpoints.common.getOrderStatus, {
        params: {
          ...request,
          userName: this.config.username,
          password: this.config.password,
        },
      })
      .then(
        ({
          data: {
            orderNumber,
            orderStatus,
            actionCode,
            actionCodeDescription,
            errorCode,
            errorMessage,
            amount,
            currency,
            ...rest
          },
        }) =>
          this.hasError(errorCode)
            ? Promise.reject({ errorCode, errorMessage })
            : Promise.resolve<GetOrderStatusResponse>({
                orderNumber,
                orderStatus,
                actionCode,
                actionCodeDescription,
                amount,
                currency,
                ...rest,
              })
      );
}
