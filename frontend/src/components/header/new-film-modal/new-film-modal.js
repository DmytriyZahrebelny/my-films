import React from 'react';

import { useNewFilmModal } from './use-new-film-modal';
import { MODAL_MAP } from './new-film-modal.constants';

export const NewFilmModal = ({ open, onClose }) => {
  const { typeModal, setModalType } = useNewFilmModal(onClose);

  const Modal = MODAL_MAP[typeModal];

  return <Modal setModalType={setModalType} open={open} onClose={onClose} />;
};
