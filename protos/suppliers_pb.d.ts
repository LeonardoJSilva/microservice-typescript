// package: 
// file: suppliers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SuppliersByCodesRequest extends jspb.Message { 
    clearCodesList(): void;
    getCodesList(): Array<number>;
    setCodesList(value: Array<number>): SuppliersByCodesRequest;
    addCodes(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuppliersByCodesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SuppliersByCodesRequest): SuppliersByCodesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuppliersByCodesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuppliersByCodesRequest;
    static deserializeBinaryFromReader(message: SuppliersByCodesRequest, reader: jspb.BinaryReader): SuppliersByCodesRequest;
}

export namespace SuppliersByCodesRequest {
    export type AsObject = {
        codesList: Array<number>,
    }
}

export class SuppliersByCodesResponse extends jspb.Message { 
    clearCodesList(): void;
    getCodesList(): Array<number>;
    setCodesList(value: Array<number>): SuppliersByCodesResponse;
    addCodes(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuppliersByCodesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SuppliersByCodesResponse): SuppliersByCodesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuppliersByCodesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuppliersByCodesResponse;
    static deserializeBinaryFromReader(message: SuppliersByCodesResponse, reader: jspb.BinaryReader): SuppliersByCodesResponse;
}

export namespace SuppliersByCodesResponse {
    export type AsObject = {
        codesList: Array<number>,
    }
}
