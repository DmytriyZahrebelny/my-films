import { createSlice } from '@reduxjs/toolkit';
import { Api } from '../../api';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    pages: 1,
    isLastPage: false,
    currentFilms: [],
    allFilms: [],
    searchFilms: [],
  },
  reducers: {
    addFilms: (state, action) => {
      state.allFilms = action.payload.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    searchFilms: (state, action) => {
      state.searchFilms = action.payload;
    },
    currentFilmsData: (state) => {
      state.currentFilms = state.allFilms.slice(0, state.pages * 10);
      state.pages += 1;
      state.isLastPage = state.allFilms.length <= state.pages;
    },
  },
});

export const { addFilms, searchFilms, currentFilmsData } = filmsSlice.actions;

export const getFilmsAsync = () => async (dispatch) => {
  const data = await Api.getFilms();

  dispatch(addFilms(data));
};

export const addNewFilmsAsync = (data) => async (dispatch) => {
  const response = await Api.addNewFilm(data);

  dispatch(addFilms(response));
};

export const deleteFilmAsync = (id) => async (dispatch) => {
  const response = await Api.deleteFilm(id);

  dispatch(addFilms(response));
};

export const uploadDataAsync = (file) => async (dispatch) => {
  const response = await Api.uploadData(file);

  dispatch(addFilms(response));
};

export const selectFilms = (state) => {
  return state.films.allFilms;
};
export const selectCurrentFilms = (state) => {
  const { currentFilms, isLastPage } = state.films;
  return { currentFilms, isLastPage };
};
export const selectSearchFilms = (state) => state.films.searchFilms;

export default filmsSlice.reducer;
