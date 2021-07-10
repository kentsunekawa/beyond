const base = {
  font: {
    eng: "'Open Sans', sans-serif",
  },
}

const light = {
  backgroundColor: '#fff',
}

const dark = {
  backgroundColor: '#333',
}

export const theme = {
  light: {
    ...base,
    ...light,
  },
  dark: {
    ...base,
    ...dark,
  },
}

export type AppTheme = typeof theme.light | typeof theme.dark
