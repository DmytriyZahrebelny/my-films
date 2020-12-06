import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useFilmsCardStyles } from './use-films-card-styles';
import { Icon } from '../../../components/icon';
import { ROUTES } from '../../../app.constants';

export const FilmsCard = ({ id, title, stars, lastLink }) => {
  const classes = useFilmsCardStyles();

  return (
    <Grid item xs={3}>
      <Link to={`${ROUTES.info}/${id}`} ref={lastLink} className={classes.card}>
        <Icon name="film" size={80} />
        <div className={classes.star}>
          <Icon name="star" size={30} />
          <Typography variant="h5" color="textPrimary">
            {stars.length}
          </Typography>
        </div>
        <Typography variant="h5" color="textPrimary" classes={{ root: classes.title }}>
          {title}
        </Typography>
      </Link>
    </Grid>
  );
};
