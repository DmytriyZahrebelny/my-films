import axios from 'axios';

import { BASE_URL, ENDPOINT_MAP } from './api.constants';

export const Api = {
  async getFilms() {
    const response = await axios.get(BASE_URL);

    const data = response.json();
    return data;
  },
  async getFilmInfo(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);

    const data = response.json();
    return data;
  },
  async addNewFilm(filmData) {
    const response = await axios.post(BASE_URL, filmData);

    const data = await response.json();

    return data;
  },
  async deleteFilm(id) {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    const data = response.json();
    return data;
  },
  async uploadData(file) {
    const response = await axios.post(`${BASE_URL}/${ENDPOINT_MAP.upload}`, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },
};
