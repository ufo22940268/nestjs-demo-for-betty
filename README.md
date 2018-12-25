# Demo

#### data flow

    app.controller -> app.service -> grpc.service

`grpc.service` only have interface. Implement it with real grpc request. And `grpc.service` should contains all grpc interfaces from all microservices.
