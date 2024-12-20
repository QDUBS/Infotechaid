import { HttpException, HttpStatus } from '@nestjs/common';

export class PermissionErrorException extends HttpException {
  private errorCode = 'PermissionError';

  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }

  getErrorCode(): string {
    return this.errorCode;
  }
}
