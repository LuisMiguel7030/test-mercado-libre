// vendors
import React from 'react';
// componentes
import { getIconName } from '../icon.helper';
// constants
import { ICONS_PATH } from '../../../constants/path.constants';

it('Should return large icon path', () => {
  const icon = 'mock-icon';
  expect(getIconName(icon, true)).toEqual(`${ICONS_PATH}/${icon}@2x.png`)
});

it('Should return normal icon path', () => {
  const icon = 'mock-icon';
  expect(getIconName(icon, false)).toEqual(`${ICONS_PATH}/${icon}.png`)
});
