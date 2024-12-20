import { HttpException, HttpStatus } from '@nestjs/common';

export class TokenErrorException extends HttpException {
  private errorCode = 'UnauthorizedError';

  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }

  getErrorCode(): string {
    return this.errorCode;
  }
}
