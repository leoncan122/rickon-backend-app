import { Injectable } from '@nestjs/common';
import { Auth } from './interfaces/User';

@Injectable()
export class AuthService {
    user: Auth = {
        user: 'Alejandro',
        token: '',
        isLoged: false,
    } 
    submitLogin(): Auth {
        return  {...this.user, user: 'Alejandro', token: '4219848912', isLoged: true}
    }
    logout(): Auth {
        return  {...this.user, user: 'Alejandro', token: '', isLoged: false}
    }
}
