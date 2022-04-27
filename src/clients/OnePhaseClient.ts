import axios from 'axios';
import { Endpoints } from '../config/endpoints';
import { ClientConfig } from '../models/ClientConfig';
import { GetPaymentRedirectRequest } from '../models/requests/GetPaymentRedirectRequest';
import { getFormattedGetPaymentRedirectRequest } from '../helpers/GetPaymentRedirectRequest';
import { GetPaymentRedirectResponse } from '../models/responses/GetPaymentRedirectResponse';
import { BaseClient } from './BaseClient';

export class OnePhaseClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  getPaymentRedirect = (request: GetPaymentRedirectRequest) =>
    axios
      .get(Endpoints.onePhase.registerPayment, {
        params: getFormattedGetPaymentRedirectRequest(this.config, request),
      })
      .then(({ data: { errorCode, errorMessage, formUrl, orderId } }) =>
        this.hasError(errorCode)
          ? Promise.reject({ errorCode, errorMessage })
          : Promise.resolve<GetPaymentRedirectResponse>({
              formUrl,
              orderId,
            })
      );
}
