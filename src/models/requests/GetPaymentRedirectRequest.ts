import { Currency } from "../../enums/Currency";
import { OrderBundle } from "../OrderBundle";
import { GetPaymentRedirectRequestParams } from "../GetPaymentRedirectRequestParams";

export interface GetPaymentRedirectRequest {
  orderNumber: string;
  amount: number;
  currency: Currency;
  returnUrl: string;
  params?: GetPaymentRedirectRequestParams;
  orderBundle: OrderBundle;
}
