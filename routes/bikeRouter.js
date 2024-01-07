const express = require('express');
const app = express();
const validation = require("./../validation/validateOrderType") // օրինակ
const bikeController = require("./../controllers/bikesController") // օրինակ


app.post("/", validation, bikeController.createCar);  // ավելացնել bikes.json զանգվածի մեջ  ավտոմեքենա
app.get("/", bikeController.getCars); // ստանալ բոլոր ավտոմեքենաները
app.put("/:id", validation, bikeController.updateCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
app.delete("/:id", bikeController.deleteCar);  // փոփոխել ավտոմեքենայի ինֆորմացիան ըստ body_ի
module.exports = app;