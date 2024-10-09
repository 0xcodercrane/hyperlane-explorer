// @ts-ignore
import { theme } from '../../tailwind.config';

const themeColors = theme.extend.colors as unknown as Record<string, string>;

export const Color = {
  black: themeColors.black,
  white: themeColors.white,
  gray: themeColors.gray[500],
  lightGray: themeColors.gray[200],
  primary: themeColors.blue[500],
  accent: themeColors.pink[500],
  blue: themeColors.blue[500],
  pink: themeColors.pink[500],
  red: themeColors.red[500],
} as const;
