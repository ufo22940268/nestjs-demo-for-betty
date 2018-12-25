import { Injectable } from '@nestjs/common';

@Injectable()
export class GrpcService {

    getSomeDataFromGrpcServiceA() {
        return "apple"
    }
}
