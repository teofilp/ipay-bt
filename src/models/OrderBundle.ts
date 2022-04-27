import { CustomerDetails } from "./CustomerDetails";

export interface OrderBundle {
  orderCreationDate: Date;
  customerDetails: CustomerDetails;
}
