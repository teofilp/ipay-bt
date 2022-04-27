const baseUrl = "https://ecclients.btrl.ro:5443/payment/rest";

export const Endpoints = {
  onePhase: {
    registerPayment: `${baseUrl}/register.do`,
  },
  common: {
    getOrderStatus: `${baseUrl}/getOrderStatusExtended.do`,
  },
};
