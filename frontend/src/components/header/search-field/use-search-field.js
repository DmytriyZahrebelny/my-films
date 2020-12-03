import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../app.constants';

import { selectFilms, searchFilms } from '../../../store/films';

export const useSearchField = () => {
  const films = useSelector(selectFilms);
  const dispatch = useDispatch();
  const history = useHistory();

  const searchFilm = (evt) => {
    evt.preventDefault();

    if (history.location.pathname !== '/search') {
      history.push(ROUTES.search);
    }

    const searchData = films.filter(({ title, stars }) => {
      return (
        title.toLowerCase().includes(evt.target.search.value.toLowerCase()) ||
        stars.filter((star) => star.toLowerCase().includes(evt.target.search.value)).length
      );
    });

    dispatch(searchFilms(searchData));
  };

  return { searchFilm };
};
