import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { selectFilmInfo, getFilmInfoAsync } from '../../store/films-info';
import { deleteFilmAsync } from '../../store/films';
import { ROUTES } from '../../app.constants';

export const useFilmInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const filmInfo = useSelector(selectFilmInfo);
  const history = useHistory();

  const deleteFilm = () => {
    dispatch(deleteFilmAsync(id));
    history.push(ROUTES.default);
  };

  useEffect(() => {
    dispatch(getFilmInfoAsync(id));
  }, [dispatch, getFilmInfoAsync]);

  return {
    filmInfo,
    deleteFilm,
  };
};
