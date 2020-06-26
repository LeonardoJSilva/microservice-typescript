import express from "express";
import bodyParser from 'body-parser'
import * as supplierController from './controller/supplier';
import {$log} from "@tsed/logger";

$log.level = "debug";
$log.name = "API";

const app = express();

app.use(bodyParser.json())
app.set("port", process.env.PORT || 3000);

app.get("/suppliers", supplierController.allSuppliers);
app.get("/supplier/:code", supplierController.getSupplier);
app.post("/supplier", supplierController.addSupplier);
app.delete("/supplier/:code", supplierController.deleteSupplier);

const server = app.listen(app.get("port"), () => {
    $log.info("App is running on http://localhost:%d", app.get("port"));
});