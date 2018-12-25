import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcService } from './grpc/grpc.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GrpcService],
})
export class AppModule {}
