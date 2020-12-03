import { configureStore } from '@reduxjs/toolkit';
import FilmsReducer from './films/films-slice';
import FilmInfoReducer from './films-info/films-info-slice';

export default configureStore({
  reducer: {
    films: FilmsReducer,
    filmInfo: FilmInfoReducer,
  },
});
