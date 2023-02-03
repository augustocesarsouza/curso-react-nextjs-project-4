import P from 'prop-types';
import * as Styled from './styles';

// tomar cuidado com esse "dangerouslySetInnerHTML", isso é para os estilos funcionarem tipo <strong>
// objeto "__html" para especificar que o valor da propriedade é HTML.
export const TextComponent = ({ children }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node,
};
