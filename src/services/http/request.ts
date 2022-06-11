import { EHttpCode, EHttpMethod, IApiResult } from './@types';

const request = async (
  api: any,
  resource: string,
  successCode: EHttpCode = EHttpCode.OK,
  method: EHttpMethod = EHttpMethod.GET,
  body?: any,
): Promise<IApiResult> => {
  const result = <IApiResult>{};

  const Api = await api();

  try {
    const res = await Api[method](resource, body);
    result.success = res.status === successCode;
    result.code = res.status;
    result.description = res.statusText;
    result.header = res?.headers;
    result.data = res?.data;
  } catch (err: any) {
    result.success = false;
    result.code = err?.response?.status || 500;
    result.header = null;
    result.data = {
      code: err?.response?.status || 500,
      message: err?.message,
      name: err?.name,
    };
    console.log(result);
  } finally {
    return result;
  }
};

export default request;
