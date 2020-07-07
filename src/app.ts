import express from "express";
import bodyParser from 'body-parser'
import * as supplierController from './controller/supplier';
import {$log} from "@tsed/logger";
import {server} from "./grpc/server";
import {toNumber} from "validate-typescript/lib/conversions";

$log.level = "debug";

const app = express();

app.use(bodyParser.json())
app.set("port", toNumber(process.env.PORT) || 3000);

app.get("/suppliers", supplierController.allSuppliers);
app.get("/supplier/:code", supplierController.getSupplier);
app.post("/supplier", supplierController.addSupplier);
app.delete("/supplier/:code", supplierController.deleteSupplier);

server()

const api = app.listen(app.get("port"), () => {
    $log.name = "API";
    $log.info("App is running on ", app.get("port"));
});

