import { makeStyles } from '@material-ui/core';

export const useWarningModalStyles = makeStyles({
  controls: {
    display: 'flex',
    width: '100%',
  },
  btn: {
    display: 'block',
    width: 200,
    height: 40,
    marginRight: 20,
    border: 'none',
    outline: 'none',
    borderRadius: 10,
    cursor: 'pointer',
  },
});
