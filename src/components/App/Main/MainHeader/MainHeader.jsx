import styled from 'styled-components';
import { Link, useLocation } from 'wouter';

const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  justify-content: space-between;
`;

const MainIconLink = styled(Link)(({ theme }) => {
  const { colors, space } = theme;

  return `
    color: ${colors.darkred};
    display: grid;
    align-items: center;
    transition: color 0.1s;
    padding: 0 ${space.md};

    &:hover {
      color: ${colors.lightred};
    }
  `;
});

const NavLinks = styled.div(({ theme }) => {
  const { space } = theme;

  return `
    padding: 0 ${space.md};
  `;
});

const PageNavLink = styled(Link)(({ isactive, theme }) => {
  const { colorSettings, colors, space } = theme;

  return `
    border-bottom: 3px solid ${isactive ? colors.green : 'hsl(0, 0%, 0%, 0)'};
    display: grid;
    align-items: center;
    padding: ${space.lg};
    text-transform: uppercase;
    text-decoration: none;
    color: ${isactive ? colors.darkred : colorSettings.bodyColor};

    &:hover {
      color: ${colors.lightred};
    }
  `;
});

const links = [
  {
    label: 'About',
    path: '/about'
  }
];

const MainHeader = () => {
  const [location] = useLocation();

  const navLinkNodes = links.map(({ label, path }) => {
    const isCurrentLocation = location === path;

    return (
      <PageNavLink key={label} to={path} isactive={isCurrentLocation ? 1 : 0}>
        {label}
      </PageNavLink>
    );
  });

  return (
    <StyledHeader>
      <MainIconLink to="/">
        <svg viewBox="148.856 101.864 36.143 30.117" xmlns="http://www.w3.org/2000/svg" height="36" fill="currentcolor">
          <path d="M 175.551 113.904 C 173.275 113.865 171.445 112.532 171.445 110.894 C 171.445 109.234 173.332 107.884 175.664 107.884 C 177.149 107.884 178.46 108.432 179.206 109.262 L 184.949 106.619 C 183.171 103.79 179.68 101.864 175.666 101.864 L 148.856 101.864 L 148.856 107.884 L 163.918 107.884 L 148.856 125.956 L 148.856 131.981 L 175.212 131.981 C 180.617 131.981 184.999 127.938 184.999 122.946 C 184.999 118.061 180.798 114.074 175.551 113.904 Z M 175.212 125.956 L 156.39 125.956 L 165.973 114.452 C 167.543 117.586 171.124 119.811 175.325 119.924 C 177.353 119.975 178.979 121.308 178.979 122.94 C 178.973 124.606 177.291 125.956 175.212 125.956 Z" transform="matrix(1, 0, 0, 1, 0, 7.105427357601002e-15)" />
        </svg>
      </MainIconLink>
      <NavLinks>
        {navLinkNodes}
      </NavLinks>
    </StyledHeader>
  );
};

export default MainHeader;
