import React from 'react';
import { Modal as Popup } from '@material-ui/core';

import { useNewFilmModalStyles } from './use-modal-styles';
import { Icon } from '../icon';

export const Modal = ({ open, onClose = null, children }) => {
  const classes = useNewFilmModalStyles();

  return (
    <Popup open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.content}>
        {onClose && (
          <div className={classes.close} onClick={onClose}>
            <Icon name="close" size={25} />
          </div>
        )}
        {children}
      </div>
    </Popup>
  );
};
