import { get } from "lodash-es";
import { AxiosResponse } from "axios";

const successStatus = [200, 201, 204 , 301 ,304];

export default function responseHandler(response: AxiosResponse): any {
  const status = get(response, "data.status", 500);
  const data = get(response, "data.data", response.data.data);
  const code = get(response, "data.code", 0);

  if (!successStatus.includes(status)) {
    return {
      code: 1,
      message: "请求失败",
      ...response
    }
  }

  // return { ...response, data, code };
  return { data, code };
}
