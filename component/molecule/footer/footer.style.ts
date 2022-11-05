import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.footerBgColor};
  position: absolute;
  bottom: 0;
`;
