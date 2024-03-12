import styled from 'styled-components';
import '@fontsource-variable/raleway';
import { H, Page } from '../../../ui';
import LinkList from './LinkList';

const Hero = styled.div`
  padding: 3em 0;
`;

const BigText = styled.div`
  font-size: 4em;
  font-weight: bolder;
  font-family: 'Raleway Variable';
  text-transform: uppercase;
`;

const Section = styled.section(({ theme }) => {
  const { space } = theme;

  return `
    margin: ${space.xl} 0;
  `;
});

const projects = [
  {
    key: 'overeasy',
    target: 'https://overeasy-css.github.io/',
    title: 'OverEasy',
    desc: 'A deliciously lightweight OOCSS grid and style framework',
  },
];

const Home = () => {
  return (
    <Page>
      <Hero>
        <div>Hi, I&apos;m</div>
        <BigText>Zach</BigText>
        <div>I like building stuff with code</div>
      </Hero>
      <Section>
        <H l={2}>Projects</H>
        <LinkList items={projects} />
      </Section>
    </Page>
  );
};

export default Home;
