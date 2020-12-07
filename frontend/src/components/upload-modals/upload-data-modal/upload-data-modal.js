import React from 'react';

import { Modal } from '../../modal';
import { useUploadDataModalStyles } from './use-upload-data-modal-styles';
import { useUploadDataModal } from './use-upload-data-modal';

export const UploadDataModal = ({ onClose }) => {
  const classes = useUploadDataModalStyles();
  const { onUploadHandler } = useUploadDataModal(onClose);

  return (
    <Modal open onClose={onClose}>
      <div className={classes.form}>
        <input type="file" onChange={onUploadHandler} />
      </div>
    </Modal>
  );
};
