import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useHeaderStyles } from './use-header-styles';
import { useHeader } from './use-header';
import { SearchField } from './search-field';
import { UploadModals } from '../upload-modals';
import { ROUTES } from '../../app.constants';

export const Header = () => {
  const classes = useHeaderStyles();
  const { open, onClose, openModal } = useHeader();

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
        <UploadModals open={open} onClose={onClose} />
      </div>
    </AppBar>
  );
};
