import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faCodepen,
  faGithub,
  faGoogle,
  faReact,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import zsTheme from '../themes/zsTheme';
import Header from './header';
import './layout.css';

library.add(faEnvelope, faCodepen, faGithub, faGoogle, faReact, faTwitter);

const Layout = ({ children }) => {
  const SiteLayout = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  `;

  const ContentSection = styled.div(({ theme }) => {
    const { spacing } = theme;

    return `
      display: grid;
      grid-template-columns: minmax(auto, 960px);
      justify-content: center;
      padding: 0 ${spacing[3]} 4em;
    `;
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <ThemeProvider theme={zsTheme}>
            <SiteLayout>
              <Header siteTitle={data.site.siteMetadata.title} />
              <ContentSection>
                <main>{children}</main>
              </ContentSection>
            </SiteLayout>
          </ThemeProvider>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
