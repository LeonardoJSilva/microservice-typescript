// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var suppliers_pb = require('./suppliers_pb.js');

function serialize_SuppliersByCodesRequest(arg) {
  if (!(arg instanceof suppliers_pb.SuppliersByCodesRequest)) {
    throw new Error('Expected argument of type SuppliersByCodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SuppliersByCodesRequest(buffer_arg) {
  return suppliers_pb.SuppliersByCodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SuppliersByCodesResponse(arg) {
  if (!(arg instanceof suppliers_pb.SuppliersByCodesResponse)) {
    throw new Error('Expected argument of type SuppliersByCodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SuppliersByCodesResponse(buffer_arg) {
  return suppliers_pb.SuppliersByCodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SupplierService = exports.SupplierService = {
  getSuppliersByCodes: {
    path: '/Supplier/GetSuppliersByCodes',
    requestStream: false,
    responseStream: false,
    requestType: suppliers_pb.SuppliersByCodesRequest,
    responseType: suppliers_pb.SuppliersByCodesResponse,
    requestSerialize: serialize_SuppliersByCodesRequest,
    requestDeserialize: deserialize_SuppliersByCodesRequest,
    responseSerialize: serialize_SuppliersByCodesResponse,
    responseDeserialize: deserialize_SuppliersByCodesResponse,
  },
};

exports.SupplierClient = grpc.makeGenericClientConstructor(SupplierService);
