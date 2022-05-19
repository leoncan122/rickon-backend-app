import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './controllers/auth/auth.service';
import { JwtAuthGuard } from './controllers/auth/jwt-auth.guard';

@Controller()
export class AppController {

  constructor(private authService: AuthService){}
  // a better practice would be create an injectable class that extends AuthGuards('local')
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
