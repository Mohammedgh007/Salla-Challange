

/**
 * It handles representing the exception caused by unknown reason in the backend..
 */
export default class BadRequestException extends Error {

    constructor(message: string) {
      super(message)
      this.name = 'BAD_REQUEST_ERROR'
      this.message = message
    }
}
