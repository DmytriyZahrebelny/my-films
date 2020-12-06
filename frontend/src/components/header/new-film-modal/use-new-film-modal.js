import { useState } from 'react';
import { CHOICE_MODAL } from './new-film-modal.constants';

export const useNewFilmModal = () => {
  const [typeModal, setModalType] = useState(CHOICE_MODAL);

  return {
    typeModal,
    setModalType,
  };
};
