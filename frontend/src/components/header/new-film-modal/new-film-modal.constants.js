import { ChoiceLoadModal } from './choice-load-modal/choice-load-modal';
import { FormModal } from './form-modal/form-modal';
import { UploadDataModal } from '../upload-data-modal';

export const UPLOAD_MODAL = 'UPLOAD_MODAL';
export const FORM_MODAL = 'FORM_MODAL';
export const CHOICE_MODAL = 'CHOICE_MODAL';

export const MODAL_MAP = {
  [CHOICE_MODAL]: ChoiceLoadModal,
  [FORM_MODAL]: FormModal,
  [UPLOAD_MODAL]: UploadDataModal,
};
