import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  background-color: ${colors.backgroundColorLight};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
`
