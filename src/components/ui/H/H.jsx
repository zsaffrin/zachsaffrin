import { arrayOf, bool, node, number, oneOfType } from 'prop-types';
import styled from 'styled-components';
import '@fontsource-variable/raleway';

const StyledHeading = styled.div(({ $compact, theme }) => {
  const { space } = theme;
  return `
    font-family: 'Raleway Variable';
    margin: ${$compact ? 0 : `0 0 ${space.lg}`};
    text-transform: uppercase;
  `;
});

const H = ({ children, compact, l, ...props }) => {
  return (
    <StyledHeading as={`h${l}`} $compact={compact ? 1 : 0} {...props}>
      {children}
    </StyledHeading>
  );
};
H.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
  compact: bool,
  l: number,
};
H.defaultProps = {
  children: [],
  compact: false,
  l: 1,
};

export default H;
