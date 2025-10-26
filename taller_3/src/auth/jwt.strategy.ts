import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'MI_SECRETO_LOCAL',
    });
  }

  async validate(payload: any) {
    // payload: { correo, rol, sub }
    return { id_usuario: payload.sub, correo: payload.correo, rol: payload.rol };
  }
}
