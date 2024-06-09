/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Auth: {
      publicKey: string
      type: "sst.aws.Auth"
    }
    Email: {
      sender: string
      type: "sst.aws.Email"
    }
  }
}
export {}