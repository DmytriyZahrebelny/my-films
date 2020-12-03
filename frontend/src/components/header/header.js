import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useHeaderStyles } from './use-header-styles';
import { useHeader } from './use-header';
import { SearchField } from './search-field';
import { NewFilmModal } from './new-film-modal';
import { ROUTES } from '../../app.constants';

export const Header = () => {
  const classes = useHeaderStyles();
  const { open, openModal, onClose } = useHeader();

  return (
    <AppBar position="fixed" color="primary">
      <div className={classes.wrapper}>
        <Typography variant="h4">
          <Link className={classes.link} to={ROUTES.default}>
            CINEMA
          </Link>
        </Typography>
        <SearchField />
        <Typography className={classes.newFilm} variant="body1" onClick={openModal}>
          Add new film
        </Typography>
        <NewFilmModal open={open} onClose={onClose} />
      </div>
    </AppBar>
  );
};
