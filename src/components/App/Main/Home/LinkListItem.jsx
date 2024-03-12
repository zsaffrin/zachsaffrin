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
    display: block;
    transition: border 0.2s, background 0.2s;

    &:hover {
      border: 1px solid ${colors.medblue};
      background: ${colors.brightwhite};
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
  return (
    <li>
      <ListItemLink href={item.target} target="_blank">
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDesc>{item.desc}</ItemDesc>
      </ListItemLink>
    </li>
  );
};
LinkListItem.propTypes = {
  item: shape({
    target: string,
    title: string,
    desc: string,
  }),
};
LinkListItem.defaultProps = {
  item: {},
};

export default LinkListItem;
