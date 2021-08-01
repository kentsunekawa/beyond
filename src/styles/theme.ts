const base = {
  font: {
    eng: "'Open Sans', sans-serif",
  },
}

const light = {
  backgroundColor: '#fff',
  colors: {
    text: '#333',
  },
}

const dark = {
  backgroundColor: '#333',
  colors: {
    text: '#ddd',
  },
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
