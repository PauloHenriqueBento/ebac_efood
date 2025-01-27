import styled from 'styled-components'
import { colors } from '../../styles/colors'

type RowProps = {
  marginBottom?: boolean
}

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CheckoutContainer = styled.div`
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
  color: ${colors.textColorSecundary};

  .hidden {
    display: none;
  }

  .sucess-container {
    p {
      line-height: 22px;
      margin-bottom: 22px;
      font-size: 14px;
    }
  }
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
`

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${(props) => (props.marginBottom ? '24px' : '8px')};
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${colors.backgroundColorMedium};
    border: 1px solid ${colors.backgroundColorMedium};
    color: ${colors.textColorBlack};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 2px solid Maroon;
    }
  }
`
