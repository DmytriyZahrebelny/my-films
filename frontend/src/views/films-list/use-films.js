import { useSelector } from 'react-redux';

import { selectFilms, selectSearchFilms } from '../../store/films';

export const useFilms = () => {
  const films = useSelector(selectFilms);
  const searchFilms = useSelector(selectSearchFilms);

  return {
    films,
    searchFilms,
  };
};
