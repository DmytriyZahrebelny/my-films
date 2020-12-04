const express = require('express');
const MocksData = require('../../mocks/mocks-data');
const {v4: uuid} = require('uuid');
const fs = require('fs');

class FilmsController {
	constructor() {
		this.path = '/films';
		this.router = express.Router();
		this.data = [];

		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(this.path, this.getAllFilms.bind(this));
		this.router.get(`${this.path}/:id`, this.getFilmById.bind(this));
		this.router.post(this.path, this.addNewFilm.bind(this));
		this.router.delete(`${this.path}/:id`, this.deleteFilm.bind(this));
		this.router.post(`${this.path}/upload`, this.uploadData.bind(this));
	}

	getAllFilms(req, res) {
		res.send(this.data);
	}

	async getFilmById(req, res) {
		const id = await req.params.id;

		const film = this.data.find(film => film.id === id);

		res.send(film);
	}

	async addNewFilm(req, res) {
		const newFilm = await req.body;

		this.data = [...this.data, {...newFilm, id: uuid()}];

		res.send(this.data);
	}

	async deleteFilm(req, res) {
		const id = await req.params.id;
		this.data = this.data.filter((film) => film.id !== id);

		res.send(this.data);
	}

	async uploadData(req, res) {
		const file = await req.files.data;

		file.mv(`${__dirname}/data/${file.name}`, () => {
			const data = fs.readFileSync(`${__dirname}/data/${file.name}`, 'UTF-8');
			const lines = data.split(/\r?\n/);

			let filmData = {};
			lines.forEach((line) => {
				if (line.trim()) {
					const index = line.indexOf(':');
					const title = line.slice(0, index).replace(/\s/g, '');
					const key = title[0].toLowerCase() + title.slice(1).trim();
					const value = line.slice(index + 1).trim();

					if (key in filmData) {
						this.data = [...this.data, {...filmData, id: uuid()}];
						filmData = {}
					} else {
						filmData[key] =
							key === 'stars'
							? value.length ? value.split(', '): []
							: value;
					}
				}
			});
			res.send(this.data)
		});
	}
}

module.exports = FilmsController;

