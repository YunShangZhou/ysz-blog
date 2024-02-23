import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

import { ConfigService } from '@nestjs/config'

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService , private configService: ConfigService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('getConfig')
  getConfig(){
    console.log(`-- this.configService.get('http');`,this.configService.get('http'))
    return this.configService.get('http');
  }
}
