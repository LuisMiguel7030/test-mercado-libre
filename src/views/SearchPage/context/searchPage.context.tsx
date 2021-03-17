// vendors
import React, { ReactElement, useReducer, createContext, ReactNode } from 'react';
// interface
import { InitialState } from '../interface/searchPage.interface';
// reducer
import { initialState, reducer } from '../reducer/searchPage.reducer';

const SearchPageContext = createContext<{state: InitialState, dispatch: Function}>(null);

type Props = {
  children: ReactNode
}

const SearchPageProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <SearchPageContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchPageContext.Provider>
  );
};

export { SearchPageContext, SearchPageProvider }
