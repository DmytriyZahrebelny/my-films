import { makeStyles } from '@material-ui/core';

export const useFilmsInfoStyles = makeStyles({
  root: {
    marginTop: 100,
  },
  userInfo: {
    marginLeft: 40,
  },
  text: {
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',

    '& svg': {
      marginRight: 20,
    },
  },
  delete: {
    cursor: 'pointer',
  },
});
