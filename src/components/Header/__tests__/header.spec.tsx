// vendors
import React from 'react';

// componentes
import Header from '../Header';

// utils
import { mountWithContext } from '../../../common/test-utils/mountWithContext';

describe('Header', () => {
  it('should render correctly', () => {
    mountWithContext(<Header />);
    expect.anything();
  });
});
