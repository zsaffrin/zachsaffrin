import styled from 'styled-components';

const Hero = styled.div`
  padding: 1em;
`;

const Home = () => {
  return (
    <Hero>
      <div>Hi, I&apos;m</div>
      <div>Zach</div>
      <div>I like building stuff with code</div>
    </Hero>
  );
};

export default Home;
