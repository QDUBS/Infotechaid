import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationErrorException extends HttpException {
  private errorCode = 'ValidationError';

  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  getErrorCode(): string {
    return this.errorCode;
  }
}
