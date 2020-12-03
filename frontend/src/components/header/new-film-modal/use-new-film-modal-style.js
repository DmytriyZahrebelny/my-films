import { makeStyles } from '@material-ui/core';

export const useNewFilmModalStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    width: 600,
    minHeight: 400,
    padding: '60px 80px',
    backgroundColor: theme.color.white,
    outline: 'none',
    boxSizing: 'border-box',

    '& input': {
      width: '100%',
    },
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    cursor: 'pointer',
  },
  button: {
    display: 'block',
    width: 200,
    height: 40,
    margin: '20px auto',
    border: 'none',
    outline: 'none',
    borderRadius: 10,
  },
}));
