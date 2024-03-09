import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding: 1rem;
`;
const ContentContainer = styled.div`
  max-width: 48em;
  margin-left: auto;
  margin-right: auto;
`;

const Page = ({ children }) => {
  return (
    <StyledPage>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyledPage>
  );
};
Page.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};
Page.defaultProps = {};

export default Page;
