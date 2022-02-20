import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('path')
  getHelloWithPath(): string {
    return this.appService.getHello();
  }

  @Get('path/that/is/long')
  getHelloWithPathThatIsLong(): string {
    return this.appService.getHello();
  }

  @Get('path/:param')
  getHelloWithParam(): string {
    return this.appService.getHello();
  }

  @Get(':param')
  getHelloWithParamAsRoot(): string {
    return this.appService.getHello();
  }

  @Post('post')
  getPost(): string {
    return this.appService.getHello();
  }

  @Put('put')
  getPut(): string {
    return this.appService.getHello();
  }

  @Delete('delete')
  getDelete(): string {
    return this.appService.getHello();
  }
}
