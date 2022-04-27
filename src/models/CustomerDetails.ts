import { BillingInfo } from "./BillingInfo";
import { DeliveryInfo } from "./DeliveryInfo";

export interface CustomerDetails {
  email: string;
  phone: string;
  deliveryInfo: DeliveryInfo;
  billingInfo: BillingInfo;
}
