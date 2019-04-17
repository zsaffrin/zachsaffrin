import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const LinkList = ({ items, images }) => {
  const LinkListUl = styled.ul(({ theme }) => {
    const { spacing } = theme;
    return `
      list-style: none;
      margin: 0;
      display: grid;
      grid-gap: ${spacing[2]};
      padding: ${spacing[2]} 0;
    `;
  });
  const LinkListItem = styled.li(({ theme }) => {
    const { colors, effects, spacing } = theme;
    return `
      margin: 0;

      & > a {
        border: 1px solid ${colors.lightgray};
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 80px 1fr;
        grid-gap: ${spacing[3]};
        align-items: start;
        border-radius: ${spacing[1]};
        padding: ${spacing[2]};
        transition: border-color ${effects.transitionSpeed};

        &:hover {
          background: ${colors.brightwhite};
          border-color: ${colors.medgray};
        }
      }
    `;
  });
  const LinkListItemThumb = styled(Img)`
    margin: 0;
    width: 100%;
  `;
  const LinkListItemTitle = styled.h3(({ theme }) => {
    const { colors } = theme;
    return `
      color: ${colors.darkred};
      text-transform: none;
    `;
  });
  const LinkListItemDesc = styled.div`
    font-size: 16px;
  `;

  const listItems = items.map(({
    id, link, name, desc, thumb,
  }) => {
    const itemImage = images.edges.find(n => n.node.name === thumb);

    return (
      <LinkListItem key={id}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <LinkListItemThumb fluid={itemImage.node.childImageSharp.fluid} />

          <div>
            <LinkListItemTitle>{name}</LinkListItemTitle>
            <LinkListItemDesc>{desc}</LinkListItemDesc>
          </div>
        </a>
      </LinkListItem>
    );
  });

  return <LinkListUl>{listItems}</LinkListUl>;
};
LinkList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  images: shape({}).isRequired,
};

const IndexPage = ({ data }) => {
  const { items } = data.profileItems;
  const projectItems = items.filter(n => n.itemType === 'project');
  const clientWorkItems = items.filter(n => n.itemType === 'clientWork');

  const HomePageLayout = styled.div`
    display: grid;
    grid-template-rows: 220px auto auto;
    grid-gap: 30px;
  `;
  const NamePlate = styled.h1`
    font-size: 72px;
  `;
  const IntroSection = styled.section`
    align-content: center;
    display: grid;
    grid-template-rows: auto auto auto;
  `;
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <HomePageLayout>
        <IntroSection>
          <div>Hi, I&apos;m</div>
          <NamePlate>Zach</NamePlate>
          <div>I like building stuff with code</div>
        </IntroSection>
        <section>
          <h2>Projects</h2>
          <LinkList items={projectItems} images={data.images} />
        </section>
        <section>
          <h2>Client Work</h2>
          <LinkList items={clientWorkItems} images={data.images} />
        </section>
      </HomePageLayout>
    </Layout>
  );
};

export const query = graphql`
  query {
    profileItems: file(name: { eq: "profileItems" }) {
      id
      items: childrenProfileItemsJson {
        id
        name
        itemType
        link
        desc
        thumb
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
