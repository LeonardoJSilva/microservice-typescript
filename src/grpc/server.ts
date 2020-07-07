import grpc from 'grpc';
import {ISupplierServer, SupplierService} from '../../protos/suppliers_grpc_pb';
import {SuppliersByCodesRequest, SuppliersByCodesResponse} from '../../protos/suppliers_pb';
import {$log} from "@tsed/logger";
import {getSuppliersByCodes} from "./getSuppliersByCodes";


class SupplierServer implements ISupplierServer{
    async getSuppliersByCodes(call: grpc.ServerUnaryCall<SuppliersByCodesRequest>, callback: grpc.sendUnaryData<SuppliersByCodesResponse>): Promise<void> {
        $log.name = "gRPC Server Suppliers";
        $log.info(`Get supplier by code ${call.request.getCodesList()}`)
        callback(null, await getSuppliersByCodes(call.request))
    }
}

export const server = (): void => {
    $log.name = "gRPC Server Suppliers";
    const server = new grpc.Server();
    server.addService<ISupplierServer>(SupplierService, new SupplierServer());
    $log.info(`Listening on ${process.env.GRPC_SUPPLIERS_PORT}`);
    server.bind(`[::]:${process.env.GRPC_SUPPLIERS_PORT}`, grpc.ServerCredentials.createInsecure());
    server.start();
}