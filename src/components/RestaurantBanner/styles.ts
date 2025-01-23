import styled from 'styled-components'
import { colors } from '../../styles/colors'

type Props = {
  image: string
}

export const Container = styled.div<Props>`
  position: relative;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  color: ${colors.white};
  font-size: 32px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  > .container {
    padding-top: 24px;
    padding-bottom: 32px;
  }
`

export const CategoryText = styled.h3`
  font-weight: 100;
  margin-bottom: 156px;
`
export const RestaurantTitle = styled.h2`
  font-weight: bold;
`
