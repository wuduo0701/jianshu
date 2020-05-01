import styled from 'styled-components';
import logopic from '../../assets/logo.png';

export const Top = styled.div`
  position: relative;
  height: 56px;
  border-bottom:  1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logopic});
  background-size: contain;
`;

export const Menu = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: red;
`