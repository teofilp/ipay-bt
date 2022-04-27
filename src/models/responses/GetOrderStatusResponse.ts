import { Currency } from "../../enums/Currency";
import { OrderStatus } from "../../enums/OrderStatus";

export interface GetOrderStatusResponse {
  orderNumber: string;
  orderStatus: OrderStatus;
  actionCode: string;
  actionCodeDescription: string;
  amount: number;
  currency: Currency;
  [key: string]: any;
}
