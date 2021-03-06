const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const upload = require('express-fileupload');

class App {
	constructor(controllers) {
		this.app = express();
		this.port = 3080;

		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	initializeMiddlewares() {
		this.app.use(cors());
		this.app.use(upload());
		this.app.use(bodyParser.json());
	}

	initializeControllers(controllers) {
		controllers.forEach((controller) => {
			this.app.use('/', controller.router);
		});
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on the port ${this.port}`);
		});
	}
}

module.exports = App;