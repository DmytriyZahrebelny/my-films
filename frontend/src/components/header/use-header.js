import { useState } from 'react';

export const useHeader = () => {
  const [open, setModal] = useState(false);

  const openModal = () => setModal(true);
  const onClose = () => setModal(false);

  return {
    open,
    openModal,
    onClose,
  };
};
