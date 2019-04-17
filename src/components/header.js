import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const StyledHeader = styled.header(({ theme }) => {
    const { spacing } = theme;
    return `
      display: grid;
      grid-template-columns: 1fr auto;
      padding: ${spacing[2]};
    `;
  });
  const HeaderIcon = styled.div(({ theme }) => {
    const { colors, effects } = theme;
    return `
      color: ${colors.darkred};
      & a {
        transition: color ${effects.transitionSpeed};
      }
      & a:hover {
        color: ${colors.lightred};
      }
    `;
  });
  const HeaderNav = styled.div(({ theme }) => {
    const { colors, effects, spacing } = theme;
    return `
      display: grid;

      & > a {
        border-bottom: ${spacing[1]} solid transparent;
        display: grid;
        align-items: center;
        padding: ${spacing[3]};
        transition: border-color ${effects.transitionSpeed}, color ${effects.transitionSpeed};
        text-transform: uppercase;

        &:active {
          color: ${colors.lightred};
        }
        &:hover,
        &:focus {
          border-color: ${colors.green};
          color: ${colors.darkred};
        }
      }
    `;
  });

  return (
    <StyledHeader>
      <HeaderIcon>
        <Link to="/" aria-label="Home page" id="home">
          <svg width="72" height="62" viewBox="0 0 72 62" fill="currentcolor">
            <path
              d="M51.27 25.655c-4.03-.07-7.27-2.43-7.27-5.33
                0-2.94 3.34-5.33 7.47-5.33 2.63 0 4.95.97 6.272
                2.44l10.17-4.68c-3.15-5.01-9.33-8.42-16.438-8.42H4v10.66h26.67L4
                46.995v10.67h46.67c9.57 0 17.33-7.16 17.33-16
                0-8.65-7.44-15.71-16.73-16.01zm-.6 21.34H17.34l16.97-20.37c2.78
                5.55 9.12 9.49 16.56 9.69 3.59.09 6.47 2.45 6.47 5.34-.01
                2.95-2.99 5.34-6.67 5.34z"
            />
          </svg>
        </Link>
      </HeaderIcon>
      <HeaderNav>
        <Link to="/about" aria-label="About page" id="about">
          About
        </Link>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
