import React from 'react';
import { Typography } from '@material-ui/core';

import { useNewFilmModalStyles } from './use-new-film-modal-style';
import { useNewFilmModal } from './use-new-film-modal';
import { TextField } from '../../text-field';
import { SelectField } from '../../select-field';
import { DVD, VHS, BLU_RAY } from './new-film-modal.constants';
import { Modal } from '../../modal';
import { AddStarsModal } from '../add-stars-modal';

export const NewFilmModal = ({ open, onClose }) => {
  const classes = useNewFilmModalStyles();
  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    setFieldValue,
    addStarsModal,
    closeStarsModal,
    isStarsModal,
    addStars,
    starsValue,
    uniqueError,
  } = useNewFilmModal(onClose);

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField label="Name" input={getFieldProps('title')} errors={errors} touched={touched} />
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
        <TextField
          input={getFieldProps('stars')}
          errors={errors}
          touched={touched}
          value={starsValue}
          disabled
        />
        <Typography variant="body1" className={classes.addStars} onClick={addStarsModal}>
          Add stars
        </Typography>
        <button className={classes.button} type="submit">
          Submit
        </button>
        {Boolean(uniqueError) && <div className={classes.uniqueError}>{uniqueError}</div>}
      </form>
      {isStarsModal && (
        <AddStarsModal open={isStarsModal} onClose={closeStarsModal} addStars={addStars} />
      )}
    </Modal>
  );
};
