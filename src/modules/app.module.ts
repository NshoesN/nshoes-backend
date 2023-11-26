import { Module } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

import { userModule } from './user.module';
import { authModule } from './auth.module';
import { userInforModule } from './userInfor.module';


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
    userModule,
    authModule,
    userInforModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}