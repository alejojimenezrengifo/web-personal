/**
 * Single source of truth for the project color palette.
 * Matching the 7 blues + accent warm color defined in plan_implementacion.md
 */
export const palette = {
  navy900: '#001D39',
  navy700: '#0A4174',
  blue600: '#49769F',
  teal500: '#4E8EA2',
  teal300: '#6EA2B3',
  sky300: '#7BBDE8',
  sky100: '#BDD8E9',
  accent: '#E8734E',
  accentHover: '#D35F3A',
  canvas: '#F4F8FB',
  fill1: '#EAF2F7',
} as const;

export type PaletteColor = keyof typeof palette;
