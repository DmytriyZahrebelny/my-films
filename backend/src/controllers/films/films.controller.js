const express = require('express');
const MocksData = require('../../mocks/mocks-data');
const {v4: uuid} = require('uuid');

class FilmsController extends MocksData {
	constructor() {
		super();
		this.path = '/films';
		this.router = express.Router();

		this.initializeRoutes();
	}

	initializeRoutes() {
		this.router.get(this.path, this.getAllFilms.bind(this));
		this.router.get(`${this.path}/:id`, this.getFilmById.bind(this));
		this.router.post(this.path, this.addNewFilm.bind(this));
		this.router.delete(`${this.path}/:id`, this.deleteFilm.bind(this));
	}

	getAllFilms(req, res) {
		res.send(this.data);
	}

	async getFilmById(req, res) {
		const id = await req.params.id;
		const film = this.data.find(film => film.id === Number(id));

		res.send(film);
	}

	async addNewFilm(req, res) {
		const newFilm = await req.body;
		this.data = [...this.data, {...newFilm, id: uuid()}];

		res.send(this.data);
	}

	async deleteFilm(req, res) {
		const id = await req.params.id;
		this.data = this.data.filter((film) => film.id !== Number(id));

		res.send(this.data);
	}
}

module.exports = FilmsController;

