import { ClientConfig } from "../models/ClientConfig";
import { GetPaymentRedirectRequest } from "../models/requests/GetPaymentRedirectRequest";
import { GetPaymentRedirectRequestParams } from "../models/GetPaymentRedirectRequestParams";
import { OrderBundle } from "../models/OrderBundle";
import moment from "moment";

export const getFormattedGetPaymentRedirectRequest = (
  config: ClientConfig,
  request: GetPaymentRedirectRequest
) => ({
  ...request,
  userName: config.username,
  password: config.password,
  params: getParams(request.params),
  orderBundle: getOrderBundle(request.orderBundle),
});

const getParams = (params?: GetPaymentRedirectRequestParams) => ({
  FORCE_3DS2: params?.use3DS2,
});

const getOrderBundle = (orderBundle: OrderBundle) => ({
  ...orderBundle,
  orderCreationDate: moment(orderBundle.orderCreationDate).format("YYYY-MM-DD"),
});
