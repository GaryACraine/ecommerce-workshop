/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    ApiRouter: {
      type: "sst.aws.Router"
      url: string
    }
  }
}
export {}