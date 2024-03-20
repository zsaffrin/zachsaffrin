import styled from 'styled-components';
import '@fontsource/lato';
import '@fontsource-variable/raleway';
import { H, IconLink, Page } from '../../../ui';

const Hero = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const TableLayout = styled.div(({ theme }) => {
  const { space } = theme;

  return `
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: ${space.xl};
  `;
});

const TableLabel = styled.div(({ theme }) => {
  const { colors } = theme;

  return `
    color: ${colors.darkred};
    font-family: 'Raleway Variable';
    font-weight: bold;
  `;
});

const Faded = styled.span(({ theme }) => {
  const { colors } = theme;

  return `
    color: ${colors.medgray};
  `;
});

const Small = styled.div`
  font-size: 0.8em;
`;

const FontSamples = styled.div(({ theme }) => {
  const { space } = theme;

  return `
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: ${space.lg};
    align-items: center;
    margin-bottom: ${space.lg};
  `;
});

const LatoSample = styled.div`
  font-family: 'Lato';
  font-size: 1.5rem;
  font-weight: bold;
`;

const RalewaySample = styled.div`
  font-family: 'Raleway Variable';
  font-size: 1.5rem;
  font-weight: bold;
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
      <Section>
        <H l={2}>This Site / Colophon</H>
        <TableLayout>
          <TableLabel>
            Design &amp; Development
          </TableLabel>
          <div>
            <strong>Zach Saffrin</strong>
            {' '}
            <Faded>(obviously)</Faded>
          </div>

          <TableLabel>
            Architecture
          </TableLabel>
          <div>
            This portfolio is a single-page
            {' '}
            <IconLink
              imgName="react.svg"
              label="React"
              target="https://react.dev/"
            />
            {' '}
            app, developed using
            {' '}
            <IconLink
              imgName="vite.svg"
              label="Vite"
              target="https://vitejs.dev/"
            />
          </div>

          <TableLabel>
            Hosting
          </TableLabel>
          <div>
            Hosted by
            {' '}
            <IconLink
              imgName="netlify.svg"
              label="Netlify"
              target="https://www.netlify.com/"
            />
            , build auto-deployed from
            {' '}
            <IconLink
              imgName="github.svg"
              label="Github"
              target="https://github.com/zsaffrin/zachsaffrin/"
            />
          </div>

          <TableLabel>
            Fonts
          </TableLabel>
          <div>
            <FontSamples>
              <RalewaySample>Raleway</RalewaySample>
              <div>Headings and highlights</div>
              <LatoSample>Lato</LatoSample>
              <div>Body text and content</div>
            </FontSamples>
            <Small>
              Fonts packaged into build with{' '}
              <IconLink
                imgName="fontsource.svg"
                label="Fontsource"
                target="https://fontsource.org/"
              />
            </Small>
          </div>

          <TableLabel>
            Utilities
          </TableLabel>
          <div>
            <div>
              <IconLink
                imgName="wouter.svg"
                label="Wouter"
                target="https://github.com/molefrog/wouter"
              />
              {' '}
              for routing
            </div>
            <div>
              <IconLink
                emoji="💅"
                label="styled-components"
                target="https://styled-components.com/"
              />
              {' '}
              for component styling
            </div>
            <div>
              <IconLink
                imgName="eslint.svg"
                label="ESLint"
                target="https://eslint.org/"
              />
              {' '}
              to keep my syntax legit
            </div>
          </div>
        </TableLayout>
      </Section>
    </Page>
  );
};

export default About;
