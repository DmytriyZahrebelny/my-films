import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import { useFilms } from './use-films';
import { FilmsCard } from './films-card';
import { useFilmStylesStyles } from './use-film-list-styles';
import { LIST_DATA_MAP, NOTHING_FOUND, SEARCH_DATA } from './films-list.constants';
import { UploadModals } from '../../components/upload-modals';

export const FilmsList = () => {
  const { pathname } = useLocation();
  const filmsData = useFilms();
  const classes = useFilmStylesStyles();
  // const history = useHistory();

  // const onCloseModal = () => history.goBack();

  if (!filmsData.films.length) {
    return <UploadModals />;
  }

  if (!filmsData.searchFilms.length && pathname === SEARCH_DATA) {
    return (
      <Typography className={classes.warningMessage} variant="h5">
        {NOTHING_FOUND}
      </Typography>
    );
  }

  return (
    <Grid container classes={{ root: classes.root }}>
      {filmsData[LIST_DATA_MAP[pathname]] &&
        filmsData[LIST_DATA_MAP[pathname]].map((data) => (
          <FilmsCard key={data.id} lastLink={filmsData.lastLink} {...data} />
        ))}
    </Grid>
  );
};
