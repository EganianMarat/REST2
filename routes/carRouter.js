const express = require('express');
const app = express();
const validation = require("./../validation/validateOrderType"); // օրինակ
const carController = require("./../controllers/carsController"); // օրինակ

app.post("/", validation, carController.createCar);  // ավելացնել cars.json զանգվածի մեջ  ավտոմեքենա
app.get("/", carController.getCars); // ստանալ բոլոր ավտոմեքենաները
app.put("/:id", validation, carController.updateCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
app.delete("/:id", carController.deleteCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի

module.exports = app;
