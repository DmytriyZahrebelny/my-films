import { useDispatch } from 'react-redux';

import { uploadDataAsync } from '../../../store/films';

export const useUploadDataModal = (onClose) => {
  const dispatch = useDispatch();
  const onUploadHandler = (evt) => {
    const data = new FormData();
    data.append('data', evt.target.files[0]);
    onClose();
    dispatch(uploadDataAsync(data));
  };

  return {
    onUploadHandler,
  };
};
