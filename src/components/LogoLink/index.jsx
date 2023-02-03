/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

// aqui na logo a pessoa tem opção ou logo dela vai ser text ou image-src, link da logo ou da image
export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
