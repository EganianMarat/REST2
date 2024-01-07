const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const validation = express.Router();
app.use(bodyParser.json());

validation.use('', (req, res, next) => {
	if (!req.body.name || !req.body.price || !req.body.currency || !req.body.kilometer || !req.body.description || !req.body.madeDate) res.status(404).send(`Invalid request`);
	else next();
})

module.exports = validation;