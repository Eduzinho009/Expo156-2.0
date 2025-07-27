export const theme = {
  colors: {
    primary: '#2E86AB',
    secondary: '#F18F01',
    background: '#F7F9FC',
    card: '#FFFFFF',
    text: '#333333',
    textLight: '#6C757D',
    border: '#E0E0E0',
    success: '#28A745',
    error: '#DC3545',
    warning: '#FFC107',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 3,
    },
  },
  typography: {
    h1: { fontSize: 28, fontWeight: 'bold' as const }, // Note o 'as const' aqui
    h2: { fontSize: 24, fontWeight: 'bold' as const },
    h3: { fontSize: 20, fontWeight: '600' as const }, // Use valores específicos
    body: { fontSize: 16, fontWeight: '400' as const },
    caption: { fontSize: 12, fontWeight: '400' as const },
  },
};