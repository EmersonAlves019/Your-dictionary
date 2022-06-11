export enum EHttpCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
}

export enum EHttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export interface IApiResult {
  success: boolean;
  code: number;
  description: string;
  header?: any;
  data: any;
}
