import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductRepository } from './product/product.repository';
import { ProductService } from './product/product.service';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [ProductRepository, ProductService, AppService],
})
export class AppModule {}
