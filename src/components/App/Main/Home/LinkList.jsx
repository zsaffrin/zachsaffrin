import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import LinkListItem from './LinkListItem';

const List = styled.ul(({ theme }) => {
  const { space } = theme;

  return `
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: ${space.lg};
  `;
});

const LinkList = ({ items }) => {
  const itemNodes = items.map((item) => (
    <LinkListItem key={item.key} item={item} />
  ));

  return (
    <List>
      {itemNodes}
    </List>
  );
};
LinkList.propTypes = {
  items: arrayOf(
    shape({
      key: string,
      image: string,
      target: string,
      title: string,
      desc: string,
    })
  ),
};
LinkList.defaultProps = {
  items: [],
};

export default LinkList;
