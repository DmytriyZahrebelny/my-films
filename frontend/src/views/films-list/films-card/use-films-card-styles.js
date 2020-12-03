import { makeStyles } from '@material-ui/core';

export const useFilmsCardStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    display: 'block',
    width: 240,
    minHeight: 335,
    margin: '30px auto',
    padding: '30px 10px 10px',
    boxShadow: theme.color.mainShadow,
    borderRadius: 10,
    textDecoration: 'none',
    textAlign: 'center',
  },
  img: {
    display: 'block',
    width: 200,
    height: 240,
    margin: '0 auto',
    'object-fit': 'contain',
  },
  star: {
    marginTop: 30,
  },
  title: {
    margin: '20px 0',
  },
}));
