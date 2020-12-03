import { createSlice } from '@reduxjs/toolkit';
import { Api } from '../../api';

export const filmInfoSlice = createSlice({
  name: 'filmInfo',
  initialState: {
    filmInfo: null,
  },
  reducers: {
    addFilmInfo: (state, action) => {
      state.filmInfo = action.payload;
    },
  },
});

export const { addFilmInfo } = filmInfoSlice.actions;

export const getFilmInfoAsync = (id) => async (dispatch) => {
  const data = await Api.getFilmInfo(id);

  dispatch(addFilmInfo(data));
};

export const selectFilmInfo = (state) => state.filmInfo.filmInfo;

export default filmInfoSlice.reducer;
