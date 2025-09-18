import { accountApi } from "./services";
import { createTransport } from "./transport/httpTransport";
import { $fetch } from "./transport/instance";

const transport = createTransport($fetch);

export const apiClient = {
  account: accountApi(transport),
};
