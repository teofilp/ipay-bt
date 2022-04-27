import { Country } from "../enums/Country";

export interface BaseInfo {
  country: Country;
  postAddress: string;
  city: string;
}
