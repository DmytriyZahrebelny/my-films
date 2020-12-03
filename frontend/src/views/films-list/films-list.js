import React from 'react';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import { useFilms } from './use-films';
import { FilmsCard } from './films-card';
import { useFilmStylesStyles } from './use-film-list-styles';
import { LIST_DATA_MAP } from './films-list.constants';

export const FilmsList = () => {
  const { pathname } = useLocation();
  const films = useFilms();
  const classes = useFilmStylesStyles();

  return (
    <Grid container classes={{ root: classes.root }}>
      {films[LIST_DATA_MAP[pathname]] &&
        films[LIST_DATA_MAP[pathname]].map((data) => <FilmsCard key={data.id} {...data} />)}
    </Grid>
  );
};
