import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';

@Module({
    imports: [AuthModule],
    controllers: [ComprasController],
    providers: [ComprasService]
})
export class ComprasModule {}
