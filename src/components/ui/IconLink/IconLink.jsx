import { string } from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a(({ theme }) => {
  const { colors } = theme;

  return `
    color: ${colors.darkred};
    text-decoration: none;

    &:hover #label {
      color: ${colors.lightred};
      text-decoration: underline;
    }
  `;
});

const Emoji = styled.span`
  font-size: 1.2em;
  margin-right: 2px;
`;

const Icon = styled.img`
  width: 1.2em;
  vertical-align: text-bottom;
  margin-right: 2px;
`;

const IconLink = ({ emoji, imgName, label, target }) => {
  const imgUrl = imgName
    ? new URL(`/src/assets/images/${imgName}`, import.meta.url).href
    : null;

  return (
    <StyledLink href={target} target="_blank">
      {emoji && <Emoji>{emoji}</Emoji>}
      {imgUrl && <Icon src={imgUrl} alt={label} />}
      {label && <span id="label">{label}</span>}
    </StyledLink>
  );
};
IconLink.propTypes = {
  emoji: string,
  imgName: string,
  label: string,
  target: string,
};
IconLink.defaultProps = {
  label: '',
  target: '',
};

export default IconLink;
