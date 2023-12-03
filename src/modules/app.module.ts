import { Module } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

import { userModule } from './user.module';
import { authModule } from './auth.module';
import { userInforModule } from './userInfor.module';
import { ProductImage } from '../entities/productImage.entity';
import { Product } from '../entities/product.entity';
import { productModule } from './product.module';
import { cartModule } from './cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'svc.sel5.cloudtype.app',
      port: 32243,
      username: 'root',
      password: '0810',
      database: 'shopping',
      entities: [User , ProductImage , Product],
      synchronize: true,
    }),
    userModule,
    authModule,
    userInforModule,
    productModule,
    cartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}