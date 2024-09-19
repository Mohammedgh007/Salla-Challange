


/**
 * It handles representing the exception caused by inputting incorect credentials
 */
export default class InvalidCredentialsException extends Error {

    constructor(message: string) {
      super(message)
      this.name = 'INVALID_CREDENTIALS_ERROR'
      this.message = message
    }
}