import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService
    ) {}

  @Get()
  async getHello(): Promise<string> {

    await this.productService.getProducts('any');

    return this.appService.getHello();
  }
}
