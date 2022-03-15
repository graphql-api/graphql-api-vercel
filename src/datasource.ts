import { RESTDataSource } from 'apollo-datasource-rest'

/**
 * @see https://vercel.com/docs/rest-api
 *
 */
export class VercelDataSource extends RESTDataSource {
  baseURL = ''
  /**
   * @see https://vercel.com/docs/rest-api#introduction/api-basics/authentication
   *
   * @param req
   */
  willSendRequest(req) {
    /** Authorization: Bearer <TOKEN> */
  }
}
