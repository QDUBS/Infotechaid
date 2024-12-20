import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async tokenValidity(id: any, sub: any): Promise<boolean> {
    return true;
  }
}
