/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    ApiRouter: {
      type: "sst.aws.Router"
      url: string
    }
    Auth: {
      publicKey: string
      type: "sst.aws.Auth"
    }
    AuthRouter: {
      type: "sst.aws.Router"
      url: string
    }
  }
}
export {}