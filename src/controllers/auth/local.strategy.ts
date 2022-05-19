import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    };

    async validate(username: string, password: string): Promise<any> {
        const userValid = await this.authService.validateUser(username, password);
        if(!userValid) throw new UnauthorizedException();
        return userValid;
    }
}