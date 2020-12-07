import React from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Modal } from '../../modal';
import { useChoiceLoadModalStyles } from './use-choice-load-modal-styles';

export const ChoiceLoadModal = () => {
  const classes = useChoiceLoadModalStyles();
  const history = useHistory();

  const getFormModal = () => history.push('/add-film');
  const getUploadModal = () => history.push('/upload-file');

  return (
    <Modal open>
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
