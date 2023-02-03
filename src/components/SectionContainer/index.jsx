import P from 'prop-types';
import * as Styled from './styles';

//Component de estilo só recebe children "olhe o styles" Basicamente o container da Section
export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
