import styled from 'styled-components'
import { Theme } from '../../Themes/styles'

export const MainCabecalho = styled.header`
  background-color: ${(props) => (props.theme as Theme).colorSecundary};
  color: ${(props) => (props.theme as Theme).colorMain};
  text-align: center;
  padding: 24px 0;
`
