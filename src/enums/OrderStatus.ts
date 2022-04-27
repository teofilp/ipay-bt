export enum OrderStatus {
  Unpaid = 0,
  AmountHeld = 1,
  DepositedSuccessfully = 2,
  AuthorizationReversed = 3,
  FullyRefunded = 4,
  ACSAuthorizationInitiated = 5,
  AuthorizationDeclined = 6,
  PartiallyRefunded = 7,
}
