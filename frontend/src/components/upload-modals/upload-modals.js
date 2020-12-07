import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { ChoiceLoadModal } from './choice-load-modal';
import { FormModal } from './form-modal';
import { UploadDataModal } from './upload-data-modal';
import { ROUTES } from '../../app.constants';

export const UploadModals = ({ open = true, onClose = null }) => {
  const history = useHistory();
  const onCloseModal = () => {
    history.push('/');
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <Switch>
          <Route path={ROUTES.addFilm}>
            <FormModal onClose={onCloseModal} />
          </Route>
          <Route path={ROUTES.uploadFile}>
            <UploadDataModal onClose={onCloseModal} />
          </Route>
          <Route path="/" component={ChoiceLoadModal} />
        </Switch>
      )}
    </>
  );
};
