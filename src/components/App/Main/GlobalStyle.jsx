import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato';

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const { colorSettings } = theme;

  return `
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }

    body {
      background: ${colorSettings.background};
      color: ${colorSettings.bodyColor};
      font-size: 18px;
      margin: 0;
      font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    p {
      line-height: 1.4;
      margin: 0 0 1em;
      max-width: 48rem;
    }
  `;
});

export default GlobalStyle;