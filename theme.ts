import { createTheme } from '@mantine/core'

export const theme = createTheme({
  primaryColor: 'coffee',
  primaryShade: {
    light: 5,
    dark: 7,
  },
  defaultRadius: 'md',
  fontFamily: 'Noto Sans JP, Hiragino Sans, "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontFamily: 'Noto Sans JP, Hiragino Sans, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '700',
  },
  colors: {
    coffee: [
      '#f7f1eb',
      '#f0e0cf',
      '#e7cdb1',
      '#ddb993',
      '#d4a575',
      '#ca9157',
      '#b77743',
      '#915b31',
      '#6b4021',
      '#452710',
    ],
  },
})
