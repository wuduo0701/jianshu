import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 220px;
  margin: 80px auto;
  background-color: #fff;
  padding-top: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Title = styled.div`
  padding: 10px;
  text-align: center;
  color: #969696;
  font-size: 18px;
`


export const Input = styled.input`
  display: block;
  width: 220px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  margin:  auto;
  color: #777;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
  background: rgb(232,240,254);
`

export const Button = styled.div`
  width: 220px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #3194d0;
  border-radius:25px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
`