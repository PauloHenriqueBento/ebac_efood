import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${colors.backgroundColorLight};
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 50px;
`
