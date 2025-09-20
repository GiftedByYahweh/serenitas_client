import { accountApi, authApi } from "./services";
import { createTransport } from "./transport/httpTransport";
import { $fetch } from "./transport/instance";

const transport = createTransport($fetch);

export const apiClient = {
  auth: authApi(transport),
  account: accountApi(transport),
};
