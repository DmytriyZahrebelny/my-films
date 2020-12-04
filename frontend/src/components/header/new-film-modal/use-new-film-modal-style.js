import { makeStyles } from '@material-ui/core';

export const useNewFilmModalStyles = makeStyles({
  form: {
    width: '100%',
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
  addStars: {
    marginTop: 15,
    width: 100,
    textAlign: 'center',
    border: '1px solid #000',
    cursor: 'pointer',
  },
  uniqueError: {
    color: 'red',
    textAlign: 'center',
  },
});
