const express = require('express');
const data = require('../../mocks/data');

class FilmsController {
	constructor() {
		this.path = '/films';
		this.router = express.Router();

		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(this.path, this.getAllFilms);
	}

	async getAllFilms(req, res) {
		const products = data;

		res.send(products);
	}
}

module.exports = FilmsController;

