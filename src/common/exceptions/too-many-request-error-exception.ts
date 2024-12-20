import { HttpException, HttpStatus } from '@nestjs/common';

export class TooManyRequestErrorException extends HttpException {
  private errorCode = 'TooManyRequestError';
  private retryDateTime = null;

  constructor(message: string, retryDateTime: any) {
    super(message, HttpStatus.TOO_MANY_REQUESTS);
    this.retryDateTime = retryDateTime;
  }

  getErrorCode(): string {
    return this.errorCode;
  }

  getRetryDateTime() {
    return this.retryDateTime;
  }
}
