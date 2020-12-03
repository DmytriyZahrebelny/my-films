import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getFilmsAsync } from '../store/films';
import { FilmsList } from '../views/films-list';
import { FilmInfo } from '../views/film-info';
import { Header } from '../components/header';
import { ROUTES } from '../app.constants';
import { useRootStyles } from './use-root-styles';

export const Root = () => {
  const dispatch = useDispatch();
  const classes = useRootStyles();

  useEffect(() => {
    dispatch(getFilmsAsync());
  }, [dispatch, getFilmsAsync]);

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path={ROUTES.search} component={FilmsList} />
        <Route path={`${ROUTES.info}/:id`} component={FilmInfo} />
        <Route path={ROUTES.default} component={FilmsList} />
      </Switch>
    </div>
  );
};
