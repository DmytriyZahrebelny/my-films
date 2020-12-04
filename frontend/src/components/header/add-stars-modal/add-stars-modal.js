import React from 'react';

import { Modal } from '../../modal';
import { TextField } from '../../text-field';
import { useAddStarsModalStyles } from './use-add-stars-modal-styles';
import { useAddStarsModal } from './use-add-stars-modal';

export const AddStarsModal = ({ open, onClose, addStars }) => {
  const classes = useAddStarsModalStyles();
  const { getFieldProps, handleSubmit, errors, touched } = useAddStarsModal(onClose, addStars);

  return (
    <Modal open={open} onClose={onClose}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          errors={errors}
          touched={touched}
          input={getFieldProps('firstName')}
        />
        <TextField
          label="Last Name"
          errors={errors}
          touched={touched}
          input={getFieldProps('lastName')}
        />
        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
};
