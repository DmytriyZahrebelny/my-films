import React from 'react';
import { Typography } from '@material-ui/core';

import { Modal } from '../../../modal';
import { useChoiceLoadModalStyles } from './use-choice-load-modal-styles';

export const ChoiceLoadModal = ({ setModalType, open }) => {
  const classes = useChoiceLoadModalStyles();

  const getFormModal = () => setModalType('FORM_MODAL');
  const getUploadModal = () => setModalType('UPLOAD_MODAL');

  return (
    <Modal open={open}>
      <Typography variant="body1">Are you sure you want to delete this movie?</Typography>
      <div className={classes.controls}>
        <button onClick={getUploadModal} className={classes.btn} type="button">
          Upload file
        </button>
        <button onClick={getFormModal} className={classes.btn} type="button">
          Manually
        </button>
      </div>
    </Modal>
  );
};
