import styled from 'styled-components';
import '@fontsource-variable/raleway';
import { Page } from '../../../ui';

const Hero = styled.div`
  font-size: 18px;
`;
const BigText = styled.div`
  font-size: 4em;
  font-weight: bolder;
  font-family: 'Raleway Variable';
  text-transform: uppercase;
`;

const Home = () => {
  return (
    <Page>
      <Hero>
        <div>Hi, I&apos;m</div>
        <BigText>Zach</BigText>
        <div>I like building stuff with code</div>
      </Hero>
    </Page>
  );
};

export default Home;
