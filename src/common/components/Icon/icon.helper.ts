
// constants
import { ICONS_PATH } from '../../constants/path.constants';

export const getIconName = (icon: string, islarge: boolean): string => {
  let iconPath = `${ICONS_PATH}/${icon}`;

  if(islarge) {
    iconPath = `${iconPath}@2x`;
  }

  return `${iconPath}.png`;
}