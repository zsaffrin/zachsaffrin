const colors = {
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
};

const spacing = [0, '5px', '10px', '15px', '20px', '30px', '40px'];

const text = {
  bodyFontFamily:
    "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  bodyFontColor: colors.darkblue,
  bodyFontSize: '18px',
  bodyFontWeight: 400,
  headingFontFamily:
    "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  headingFontWeight: 700,
  headingLineHeight: 1.25,
};

const effects = {
  transitionSpeed: '0.1s',
};

const zsTheme = {
  colors,
  spacing,
  text,
  effects,
};

export default zsTheme;
