const path = 'http://localhost:3080/films';

export const Api = {
  async getFilms() {
    const response = await fetch(path, {
      method: 'GET',
    });

    const data = response.json();
    return data;
  },
  async getFilmInfo(id) {
    const response = await fetch(`${path}/${id}`, {
      method: 'GET',
    });

    const data = response.json();
    return data;
  },
  async addNewFilm(filmData) {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...filmData }),
    });

    const data = await response.json();

    return data;
  },
  async deleteFilm(id) {
    const response = await fetch(`${path}/${id}`, {
      method: 'DELETE',
    });

    const data = response.json();
    return data;
  },
};
