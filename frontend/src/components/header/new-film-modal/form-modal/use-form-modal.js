import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewFilmsAsync, selectFilms } from '../../../../store/films';
import {
  REQUIRED,
  SHOULD_BE_ONLY_NUMBERS,
  MAX_YEAR,
  MIN_YEAR,
  MIN_YEAR_WARNING,
  MAX_YEAR_WARNING,
  ALREADY_EXISTS,
} from './form-modal.constatns';

export const useFormModal = (onClose) => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const [uniqueError, setUniqueError] = useState('');
  const [isStarsModal, setStarsModal] = useState(false);
  const [stars, setStars] = useState([]);
  const validate = (value) => {
    const errors = {};

    if (!value.title) {
      errors.title = REQUIRED;
    }

    if (!value.releaseYear) {
      errors.releaseYear = REQUIRED;
    } else if (!Number(value.releaseYear)) {
      errors.releaseYear = SHOULD_BE_ONLY_NUMBERS;
    } else if (Number(value.releaseYear) < MIN_YEAR) {
      errors.releaseYear = MIN_YEAR_WARNING;
    } else if (Number(value.releaseYear) > MAX_YEAR) {
      errors.releaseYear = MAX_YEAR_WARNING;
    }

    if (!stars.length) {
      errors.stars = REQUIRED;
    }

    return errors;
  };

  const diff = (a1, a2) => {
    return !a1.filter((i) => !a2.includes(i)).concat(a2.filter((i) => !a1.includes(i))).length;
  };

  const addStarsModal = () => {
    setStarsModal(true);
  };

  const closeStarsModal = () => {
    setStarsModal(false);
  };

  const addStars = (star) => {
    if (!stars.includes(star)) {
      setStars([...stars, star]);
    }
  };

  const { handleSubmit, getFieldProps, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      releaseYear: '',
      format: '',
      stars,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const newData = { ...values, stars };
      const equalFilms = films.filter(
        ({ releaseYear, format, stars: starsList }) =>
          releaseYear === newData.releaseYear &&
          format === newData.format &&
          diff(starsList, newData.stars)
      );

      if (!equalFilms.length) {
        onClose();
        dispatch(addNewFilmsAsync(newData));
        resetForm();
        setStars([]);
      } else {
        setUniqueError(ALREADY_EXISTS);
      }
    },
  });

  return {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    setFieldValue,
    addStarsModal,
    closeStarsModal,
    isStarsModal,
    addStars,
    starsValue: stars.length ? stars.join(', ') : '',
    uniqueError,
  };
};
