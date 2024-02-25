import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, { databaseProp } from '../config/configuration';
import { PaperModule } from '../module/paper/paper.module';
import { Paper } from '../module/paper/paper.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        PaperModule
      ],
      useFactory: (configService: ConfigService) => {
        const databaseConfig: databaseProp = configService.get('database');

        console.log(`=== __dirname`, __dirname);
        return {
          type: 'mysql',
          ...databaseConfig,
          entities: [Paper],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
