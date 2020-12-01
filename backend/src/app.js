// import mongoose from 'mongoose';
const express = require('express');
const bodyParser = require("body-parser");

class App {
	constructor(controllers) {
		this.app = express();
		this.port = 3080;

		this.connectToTheDatabase();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
	}

	initializeMiddlewares() {
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

	connectToTheDatabase() {
		// const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

		// mongoose.set('debug', true);
		// mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`, {
		// 	useNewUrlParser: true,
		// 	useUnifiedTopology: true,
		// });
	}
}

module.exports = App;