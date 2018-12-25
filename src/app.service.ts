import { Injectable } from '@nestjs/common';
import {GrpcService} from "./grpc/grpc.service";

@Injectable()
export class AppService {

  constructor(private readonly grpcService: GrpcService) {}

  getHello(): string {
    return `Hello World! ${this.grpcService.getSomeDataFromGrpcServiceA()}`;
  }
}
