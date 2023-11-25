import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { AuthModule } from './auth.module';
import { User } from '../entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'svc.sel5.cloudtype.app',
      port: 32243,
      username: 'root',
      password: '0810',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
