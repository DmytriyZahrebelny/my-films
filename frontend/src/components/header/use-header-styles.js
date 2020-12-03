import { makeStyles } from '@material-ui/core';

export const useHeaderStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 1200,
    margin: '30px auto',
  },
  link: {
    textDecoration: 'none',
    color: theme.color.width,
  },
  newFilm: {
    cursor: 'pointer',
  },
}));
