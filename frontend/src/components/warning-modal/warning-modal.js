import { Typography } from '@material-ui/core';
import React from 'react';

import { Modal } from '../modal';
import { useWarningModalStyles } from './use-warning-modal-styles';

export const WarningModal = ({ open, onClose, deleteFilm }) => {
  const classes = useWarningModalStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <Typography variant="body1">Are you sure you want to delete this movie?</Typography>
      <div className={classes.controls}>
        <button onClick={deleteFilm} className={classes.btn} type="button">
          Yes
        </button>
        <button onClick={onClose} className={classes.btn} type="button">
          No
        </button>
      </div>
    </Modal>
  );
};
