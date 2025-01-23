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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 2;
  background-color: ${colors.backgroundColorDark};
  color: ${colors.textColorSecundary};
  padding: 32px;

  header {
    display: flex;
    justify-content: flex-end;

    img {
      cursor: pointer;
    }
  }
`

export const ModalInfoContainer = styled.div`
  display: flex;
  gap: 24px;

  img {
    display: block;
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

  div {
    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 22px;

      &:last-of-type {
        margin-bottom: 16px;
      }
    }
  }
`
