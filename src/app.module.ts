import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './controllers/auth/auth.middleware';
import { ComprasController } from './controllers/compras/compras.controller';
import { ComprasModule } from './controllers/compras/compras.module';
import { ComprasService } from './controllers/compras/compras.service';

@Module({
  imports: [ComprasModule],
  controllers: [AppController, ComprasController],
  providers: [AppService, ComprasService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes(ComprasController);
  }
}
