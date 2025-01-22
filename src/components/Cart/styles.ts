import styled from 'styled-components'

import thrash from '../../assets/icons/lixeira.png'
import { colors } from '../../styles/colors'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.backgroundColorDark};
`

export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: calc(40px - 16px);
  margin-bottom: 16px;
  color: ${colors.textColorSecundary};
  display: flex;
  justify-content: space-between;
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${colors.backgroundColorMedium};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  button {
    background-image: url(${thrash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
