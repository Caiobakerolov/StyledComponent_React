import styled from 'styled-components'
import { Theme } from '../../Themes/styles'

export const MainForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => (props.theme as Theme).colorSecundary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const CampInput = styled.input`
  input {
    padding: 0 16px;
    outline-color: ${(props) => (props.theme as Theme).colorMain};
  }
`

export const BtnSearch = styled.button`
  background-color: ${(props) => (props.theme as Theme).colorMain};
  border: 1px solid ${(props) => (props.theme as Theme).colorMain};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => (props.theme as Theme).colorSecundary};
  margin-left: 8px;
  cursor: pointer;
`
