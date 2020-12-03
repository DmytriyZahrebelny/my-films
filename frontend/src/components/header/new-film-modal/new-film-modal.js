import React from 'react';
import { Modal } from '@material-ui/core';

import { useNewFilmModalStyles } from './use-new-film-modal-style';
import { useNewFilmModal } from './use-new-film-modal';
import { TextField } from '../../text-field';
import { SelectField } from '../../select-field';
import { Icon } from '../../icon';
import { DVD, VHS, BLU_RAY } from './new-film-modal.constants';

export const NewFilmModal = ({ open, onClose }) => {
  const classes = useNewFilmModalStyles();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    setFieldValue,
    starsList,
  } = useNewFilmModal(onClose);

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.close} onClick={onClose}>
          <Icon name="close" size={25} />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            input={getFieldProps('title')}
            errors={errors}
            touched={touched}
          />
          <TextField
            label="Release year"
            input={getFieldProps('releaseYear')}
            errors={errors}
            touched={touched}
          />
          <SelectField
            options={[DVD, VHS, BLU_RAY]}
            defaultValue={DVD}
            setValue={setFieldValue}
            name="format"
          />
          <SelectField options={starsList} setValue={setFieldValue} multiple name="stars" />
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
