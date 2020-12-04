import React from 'react';

import { Modal } from '../modal';
import { useUploadDataModalStyles } from './use-upload-data-modal-styles';
import { useUploadDataModal } from './use-upload-data-modal';

export const UploadDataModal = ({ open }) => {
  const classes = useUploadDataModalStyles();
  const { onUploadHandler } = useUploadDataModal();

  return (
    <Modal open={open}>
      <div className={classes.form}>
        <input type="file" onChange={onUploadHandler} />
      </div>
    </Modal>
  );
};
