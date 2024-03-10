import styled from 'styled-components';
import { H, Page } from '../../../ui';

const Hero = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
`;
const Section = styled.div`
  margin-bottom: 3rem;
`;

const About = () => {
  return (
    <Page>
      <Hero>
        <H>About</H>
      </Hero>
      <Section>
        <H l={2}>Me</H>
        <p>My name is Zach Saffrin and I simply enjoy working with web technology. I&apos;m an independent developer and designer and I mostly just do this because I enjoy it. I like exploring the balance of art and function in a meaningful user experience and I appreciate the challenge of learning new things. I build because I can.</p>
      </Section>
      <div>
        <H l={2}>This Site / Colophon</H>
      </div>
    </Page>
  );
};

export default About;
