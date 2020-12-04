import { useFormik } from 'formik';

export const useAddStarsModal = (onClose, addStars) => {
  const validate = (value) => {
    const errors = {};

    if (!value.firstName) {
      errors.firstName = 'required';
    }

    if (!value.lastName) {
      errors.lastName = 'required';
    }

    return errors;
  };

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validate,
    onSubmit: ({ firstName, lastName }) => {
      addStars(`${firstName} ${lastName}`);
      onClose();
    },
  });

  return {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
  };
};
