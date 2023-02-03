/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

// a pessoa escolhe por padrão ela já começa
const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

// Padrão abaixo / esse display: flex é pra um elemento só
export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor}; //cor black
    ${background && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
