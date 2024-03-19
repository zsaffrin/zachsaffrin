import { shape, string } from 'prop-types';
import styled from 'styled-components';
import '@fontsource-variable/raleway';

const ListItemLink = styled.a(({ theme }) => {
  const { colors, space } = theme;

  return `
    text-decoration: none;
    color: inherit;
    border: 1px solid ${colors.lightgray};
    border-radius: 0.25rem;
    padding: ${space.lg};
    transition: border 0.2s, background 0.2s;
    display: grid;
    grid-template-columns: max-content 1fr;

    &:hover {
      border: 1px solid ${colors.medblue};
      background: ${colors.brightwhite};
    }
  `;
});

const ItemImage = styled.div(({ theme }) => {
  const { space } = theme;

  return `
    margin-right: ${space.lg};

    & img {
      width: 4.5rem;
    }
  `;
});

const ItemTitle = styled.h3(({ theme }) => {
  const { colors, space } = theme;

  return `
    font-family: 'Raleway Variable';
    color: ${colors.darkred};
    margin: 0 0 ${space.md};
  `;
});

const ItemDesc = styled.p`
  margin: 0;
  font-size: 0.9em;
`;

const LinkListItem = ({ item }) => {
  let imgDiv = <div />;
  if (item.image) {
    const imgUrl = new URL(`../../../../assets/images/${item.image}`, import.meta.url).href;

    imgDiv = (
      <ItemImage>
        <img src={imgUrl} alt={item.title} />
      </ItemImage>
    );
  }

  return (
    <li>
      <ListItemLink href={item.target} target="_blank">
        {imgDiv}
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDesc>{item.desc}</ItemDesc>
        </div>
      </ListItemLink>
    </li>
  );
};
LinkListItem.propTypes = {
  item: shape({
    image: string,
    target: string,
    title: string,
    desc: string,
  }),
};
LinkListItem.defaultProps = {
  item: {},
};

export default LinkListItem;
