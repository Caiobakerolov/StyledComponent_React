import styled from 'styled-components'
import { Theme } from '../../Themes/styles'

export const VagaComponent = styled.li`
  border: 1px solid ${(props) => (props.theme as Theme).colorMain};
  background-color: ${(props) => (props.theme as Theme).colorSecundary};
  color: ${(props) => (props.theme as Theme).colorMain};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => (props.theme as Theme).colorMain};
    color: ${(props) => (props.theme as Theme).colorSecundary};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => (props.theme as Theme).colorSecundary};
  background-color: ${(props) => (props.theme as Theme).colorMain};
  color: ${(props) => (props.theme as Theme).colorSecundary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${(props) => (props.theme as Theme).colorMain};
    background-color: ${(props) => (props.theme as Theme).colorSecundary};
    color: ${(props) => (props.theme as Theme).colorMain};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
