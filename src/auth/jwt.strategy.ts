import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenErrorException } from 'src/common/exceptions/token-error-exception';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService, //: UserService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    if (!payload.sub) {
      throw new TokenErrorException('token error');
    }
    const verified = await this.authService.tokenValidity(
      payload.id,
      payload.sub,
    );
    if (!verified) {
      throw new TokenErrorException('Unable to verify token');
    }
    const user = await this.userService.findOne(payload.sub);
    if (!user) {
      throw new TokenErrorException('token fraud');
    }
    user.lastAccessedAt = new Date();
    await user.save();
    return user;
  }
}
