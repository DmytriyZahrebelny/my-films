import React from 'react';

import { useSearchFieldStyles } from './use-search-field-styles';
import { useSearchField } from './use-search-field';

export const SearchField = () => {
  const classes = useSearchFieldStyles();
  const { searchFilm } = useSearchField();

  return (
    <form onSubmit={searchFilm}>
      <input name="search" className={classes.searchField} type="text" placeholder="Search" />
    </form>
  );
};
