import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { selectFilmInfo, getFilmInfoAsync } from '../../store/films-info';
import { deleteFilmAsync } from '../../store/films';
import { ROUTES } from '../../app.constants';

export const useFilmInfo = () => {
  const [isWarning, setWarning] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const filmInfo = useSelector(selectFilmInfo);
  const history = useHistory();

  const openWarningModal = () => {
    setWarning(true);
  };

  const closeWarningModal = () => {
    setWarning(false);
  };

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
    openWarningModal,
    closeWarningModal,
    isWarning,
  };
};
