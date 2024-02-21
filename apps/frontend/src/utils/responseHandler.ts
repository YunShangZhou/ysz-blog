import { get } from "lodash-es";
import { AxiosResponse } from "axios";

export default function responseHandler(response: AxiosResponse) {
  const data = get(response, "data.data", response.data);
  const code = get(response, "data.code", 0);

  return { ...response, data, code };
}
