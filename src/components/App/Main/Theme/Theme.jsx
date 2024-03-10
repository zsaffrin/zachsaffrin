import { arrayOf, node, oneOfType } from 'prop-types';
import { ThemeProvider } from 'styled-components';

const themeData = {
  space: {
    thin: '2px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
  colors: {
    black: '#111',
    darkblue: '#2a3442',
    medblue: '#344152',
    darkred: '#581111',
    medred: '#8d1a1a',
    lightred: '#c04d4d',
    green: '#1e852f',
    medgray: '#8f9696',
    lightgray: '#c2c9c9',
    white: '#efefef',
    brightwhite: '#f6f6f9',
  },
  colorSettings: {
    background: '#efefef',
    bodyColor: '#2a3442',
  }
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={themeData}>
      {children}
    </ThemeProvider>
  );
};
Theme.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};
Theme.defaultProps = {};

export default Theme;
