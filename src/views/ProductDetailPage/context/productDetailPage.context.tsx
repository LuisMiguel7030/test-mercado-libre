// vendors
import React, { ReactElement, useReducer, createContext, ReactNode } from 'react';
// interface
import { InitialState } from '../interface/productDetailPage.interface';
// reducer
import { initialState, reducer } from '../reducer/productDetailPage.reducer';

const ProductDetailPageContext = createContext<{state: InitialState, dispatch: Function}>(null);

type Props = {
  children: ReactNode
}

const ProductDetailPageProvider = ({ children }: Props): ReactElement => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <ProductDetailPageContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductDetailPageContext.Provider>
  );
};

export { ProductDetailPageContext, ProductDetailPageProvider }
