import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Emoji = ({ label, symbol }) => (
  <span role="img" aria-label={label || ''} aria-hidden={!label}>
    {symbol}
  </span>
);

const AboutPage = ({ data }) => {
  const socialLinks = data.socialLinks.childrenSocialLinksJson;

  const AboutPageLayout = styled.div(({ theme }) => {
    const { spacing } = theme;
    return `
      display: grid;
      grid-template-rows: 120px auto auto;
      grid-gap: ${spacing[6]};
    `;
  });
  const TitleSection = styled.section`
    display: grid;
    align-items: center;
  `;
  const PageSection = styled.section(({ theme }) => {
    const { spacing } = theme;
    return `
      display: grid;
      grid-gap: ${spacing[4]};

      & p {
        margin-bottom: ${spacing[1]};
      }
    `;
  });
  const SocialLinks = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    & > li {
      margin: 0.25em;
      min-width: 10em;
    }

    @media (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  `;
  const SocialLink = styled.a(({ theme }) => {
    const { colors, effects, spacing } = theme;
    return `
      align-items: center;
      background: ${colors.medgray};
      border-radius: ${spacing[1]};
      color: ${colors.white};
      display: grid;
      font-size: 16px;
      font-weight: bold;
      grid-auto-flow: column;
      grid-gap: ${spacing[2]};
      padding: ${spacing[2]} ${spacing[3]};
      position: relative;

      &:before {
        display: block;
        content: "";
        background: transparent;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: background ${effects.transitionSpeed};
      }
      &:hover:before,
      &:focus:before {
        background: rgba(255, 255, 255, 0.3);
      }
    `;
  });
  const SiteCredits = styled.div(({ theme }) => {
    const { colors, spacing } = theme;
    return `
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: ${spacing[4]};

      & a {
        color: ${colors.medred};

        &:hover,
        &:focus {
          color: ${colors.lightred};
        }
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: ${spacing[2]};

        & p {
          margin-bottom: ${spacing[3]};
        }
      }
    `;
  });
  const SiteCreditTitle = styled.h3(({ theme }) => {
    const { colors } = theme;
    return `
      color: ${colors.darkred};
      text-transform: none;
    `;
  });
  const Muted = styled.span(({ theme }) => {
    const { colors } = theme;
    return `
      color: ${colors.medgray};
    `;
  });
  const TabularEntry = styled.div(({ theme }) => {
    const { spacing } = theme;
    return `
      display: grid;
      grid-template-columns: auto 1fr;
      grid-row-gap: ${spacing[1]};
      grid-column-gap: ${spacing[3]};
      align-items: start;
    `;
  });
  const TabularEntryFullWidth = styled.div`
    grid-column: 1 / -1;
  `;
  const TypeSample = styled.div`
    font-size: 1.2em;
    line-height: 1.1;
    font-weight: 700;
  `;
  const HeadingTypeSample = styled(TypeSample)(({ theme }) => {
    const { text } = theme;
    return `
      font-family: ${text.headingFontFamily}
    `;
  });
  const FAIcon = styled(FontAwesomeIcon)`
    margin-right: 3px;
  `;
  const InlineIcon = styled(Img)`
    display: inline-block;
    margin-top: -4px;
    margin-right: 2px;
    width: 0.9em;
    vertical-align: middle;
  `;
  const MediumText = styled.span`
    font-size: 0.8em;
  `;

  return (
    <Layout>
      <SEO title="About" />
      <AboutPageLayout>
        <TitleSection>
          <h1>About</h1>
        </TitleSection>
        <PageSection>
          <h2>Me</h2>
          <p>
            My name is Zach Saffrin and I simply enjoy working with web technology. I&apos;m an
            independent developer and designer and I mostly just do this because I enjoy it. I like
            exploring the balance of art and function in a meaningful user experience and I
            appreciate the challenge of learning new things. I build because I can.
          </p>
          <SocialLinks>
            {socialLinks.map(({
              color, icon, id, label, link, name,
            }) => (
              <li key={id}>
                <SocialLink
                  aria-label={`My ${name}`}
                  href={link}
                  id={name}
                  rel="noopener noreferrer"
                  style={{ background: `${color}` }}
                  target="_blank"
                >
                  {icon && <FontAwesomeIcon icon={icon} />}
                  {label}
                </SocialLink>
              </li>
            ))}
          </SocialLinks>
        </PageSection>
        <PageSection>
          <h2>This Site / Colophon</h2>
          <SiteCredits>
            <SiteCreditTitle>Design and Development</SiteCreditTitle>
            <p>
              <strong>Zach Saffrin</strong>
              {' '}
              <Muted>(obviously)</Muted>
            </p>

            <SiteCreditTitle>Architecture</SiteCreditTitle>
            <div>
              This portfolio is a
              {' '}
              <InlineIcon fluid={data.gatsbyIcon.childImageSharp.fluid} />
              <a
                href="https://www.gatsbyjs.org/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GatsbyJS main site"
                id="gatsby"
              >
                Gatsby
              </a>
              {' '}
              site, composed with
              {' '}
              <FAIcon icon={['fab', 'react']} />
              <a
                href="https://reactjs.org/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="ReactJS main site"
                id="react"
              >
                React
              </a>
              {' '}
              and
              {' '}
              <InlineIcon fluid={data.graphqlIcon.childImageSharp.fluid} />
              <a
                href="https://graphql.org/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GraphQL main site"
                id="graphql"
              >
                GraphQL
              </a>
              , styled with
              {' '}
              <Emoji label="styled-components" symbol="💅" />
              <a
                href="https://www.styled-components.com/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="styled-components main site"
                id="styledcomponents"
              >
                styled-components
              </a>
              . If you&apos;re interested, I invite you to explore the source code on
              {' '}
              <FAIcon icon={['fab', 'github']} />
              <a
                href="https://github.com/zsaffrin/zs-homepage"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub repository for this website"
                id="githubzshomepage"
              >
                GitHub
              </a>
              .
            </div>

            <SiteCreditTitle>Hosting</SiteCreditTitle>
            <p>
              <InlineIcon fluid={data.netlifyIcon.childImageSharp.fluid} />
              <a
                href="https://www.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Netlify home page"
                id="netlify"
              >
                Netlify
              </a>
            </p>

            <SiteCreditTitle>Fonts</SiteCreditTitle>
            <TabularEntry>
              <HeadingTypeSample>Raleway</HeadingTypeSample>
              <div>
                <a
                  href="https://www.theleagueofmoveabletype.com/raleway"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Raleway font home page"
                  id="raleway"
                >
                  theleagueofmoveabletype.com/raleway
                </a>
              </div>
              <TypeSample>Lato</TypeSample>
              <div>
                <a
                  href="http://www.latofonts.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Lato fonts home page"
                  id="lato"
                >
                  latofonts.com
                </a>
              </div>
              <TabularEntryFullWidth>
                <MediumText>
                  Fonts are served from the
                  {' '}
                  <FAIcon icon={['fab', 'google']} />
                  <a
                    href="https://fonts.google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Google Fonts main site"
                    id="googlefonts"
                  >
                    Google Fonts
                  </a>
                  {' '}
                  API
                </MediumText>
              </TabularEntryFullWidth>
            </TabularEntry>

            <SiteCreditTitle>Icons</SiteCreditTitle>
            <p>
              Icons are from
              {' '}
              <a
                href="https://fontawesome.com/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="FontAwesome home page"
                id="fontawesome"
              >
                FontAwesome
              </a>
              {' '}
              where available, unicode emoji if possible, otherwise are locally cached static images
            </p>
          </SiteCredits>
        </PageSection>
      </AboutPageLayout>
    </Layout>
  );
};

export const query = graphql`
  query {
    socialLinks: file(name: { eq: "socialLinks" }) {
      name
      childrenSocialLinksJson {
        id
        name
        label
        link
        color
        icon
      }
    }
    gatsbyIcon: file(name: { eq: "gatsby-icon" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphqlIcon: file(name: { eq: "graphql-icon" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    netlifyIcon: file(name: { eq: "netlify-icon" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
