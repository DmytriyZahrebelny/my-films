import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useFilmInfo } from './use-film-info';
import { useFilmsInfoStyles } from './use-film-info-styles';
import { Icon } from '../../components/icon';
import { FILM_FORMAT_MAP } from './film-info.constants';
import { WarningModal } from '../../components/warning-modal';

export const FilmInfo = () => {
  const { filmInfo, deleteFilm, openWarningModal, closeWarningModal, isWarning } = useFilmInfo();
  const classes = useFilmsInfoStyles();

  if (!filmInfo) {
    return null;
  }

  const { title, stars, releaseYear, format } = filmInfo;

  return (
    <Grid container justify="center" classes={{ root: classes.root }}>
      <Icon name="film" size="200" />
      <div className={classes.userInfo}>
        <Typography variant="h5" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="body1" color="textPrimary" classes={{ root: classes.text }}>
          <Icon name="star" size={30} />
          {stars.join(', ')}
        </Typography>
        <Typography variant="body1" color="textPrimary" classes={{ root: classes.text }}>
          <Icon name="calendar" size={30} />
          {releaseYear}
        </Typography>
        <Typography variant="body1" color="textPrimary" classes={{ root: classes.text }}>
          <Icon name={FILM_FORMAT_MAP[format]} size={40} />
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.delete}
          classes={{ root: classes.text }}
          onClick={openWarningModal}
        >
          <Icon name="close" size={20} /> Delete
        </Typography>
      </div>
      {isWarning && (
        <WarningModal open={isWarning} onClose={closeWarningModal} deleteFilm={deleteFilm} />
      )}
    </Grid>
  );
};
