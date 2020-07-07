// package: 
// file: suppliers.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as suppliers_pb from "./suppliers_pb";

interface ISupplierService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSuppliersByCodes: ISupplierService_IGetSuppliersByCodes;
}

interface ISupplierService_IGetSuppliersByCodes extends grpc.MethodDefinition<suppliers_pb.SuppliersByCodesRequest, suppliers_pb.SuppliersByCodesResponse> {
    path: string; // "/.Supplier/GetSuppliersByCodes"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<suppliers_pb.SuppliersByCodesRequest>;
    requestDeserialize: grpc.deserialize<suppliers_pb.SuppliersByCodesRequest>;
    responseSerialize: grpc.serialize<suppliers_pb.SuppliersByCodesResponse>;
    responseDeserialize: grpc.deserialize<suppliers_pb.SuppliersByCodesResponse>;
}

export const SupplierService: ISupplierService;

export interface ISupplierServer {
    getSuppliersByCodes: grpc.handleUnaryCall<suppliers_pb.SuppliersByCodesRequest, suppliers_pb.SuppliersByCodesResponse>;
}

export interface ISupplierClient {
    getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
    getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
    getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
}

export class SupplierClient extends grpc.Client implements ISupplierClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
    public getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
    public getSuppliersByCodes(request: suppliers_pb.SuppliersByCodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: suppliers_pb.SuppliersByCodesResponse) => void): grpc.ClientUnaryCall;
}
