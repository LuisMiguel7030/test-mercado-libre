// vendors
import React, { ReactNode } from 'react';
import { mount, ReactWrapper } from 'enzyme';

// context
import { ThemeProvider } from 'styled-components';

// styles
import { theme } from '../styles/theme';

export const mountWithContext = (children: ReactNode): ReactWrapper => {
  return mount(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>,
  );
};
