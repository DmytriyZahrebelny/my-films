import { useEffect, useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectFilms,
  selectCurrentFilms,
  selectSearchFilms,
  currentFilmsData,
} from '../../store/films';

export const useFilms = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const { currentFilms, isLastPage } = useSelector(selectCurrentFilms);
  const searchFilms = useSelector(selectSearchFilms);
  const observer = useRef();

  const lastLink = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, []);

  useEffect(() => {
    if (films.length && !isLastPage && isLoading) {
      dispatch(currentFilmsData());
      setLoading(false);
    }
  }, [currentFilmsData, films, dispatch, isLastPage, isLoading]);

  useEffect(() => {
    if (films.length) {
      dispatch(currentFilmsData());
    }
  }, [currentFilmsData, films, dispatch]);

  return {
    films: currentFilms,
    searchFilms,
    lastLink,
  };
};
