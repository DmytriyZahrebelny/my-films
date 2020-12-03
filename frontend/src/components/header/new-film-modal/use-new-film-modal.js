import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { selectStars, addNewFilmsAsync } from '../../../store/films';

import { REQUIRED, SHOULD_BE_ONLY_NUMBERS } from './new-film-modal.constants';

export const useNewFilmModal = (onClose) => {
  const dispatch = useDispatch();
  const starsList = useSelector(selectStars);
  const validate = (value) => {
    const errors = {};

    if (!value.title) {
      errors.title = REQUIRED;
    }

    if (!value.releaseYear) {
      errors.releaseYear = REQUIRED;
    }

    if (!Number(value.releaseYear)) {
      errors.releaseYear = SHOULD_BE_ONLY_NUMBERS;
    }

    return errors;
  };

  const { handleSubmit, getFieldProps, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      releaseYear: '',
      format: '',
      stars: [],
    },
    validate,
    onSubmit: (values) => {
      onClose();
      dispatch(addNewFilmsAsync(values));
    },
  });

  return {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    setFieldValue,
    starsList,
  };
};
