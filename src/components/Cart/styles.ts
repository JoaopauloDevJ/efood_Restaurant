import styled from 'styled-components'
import { colors } from '../../stylos'
import excluir from '../../assets/image/excluir.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  background-color: ${colors.red};
  z-index: 1;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    margin-top: 8px;
    color: ${colors.red};
    font-size: 18px;
  }

  p {
    margin-top: 16px;
    color: ${colors.red};
    font-size: 14px;
  }

  button {
    background-image: url(${excluir});
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

export const ResumoPedido = styled.p`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
`

export const ButtonComprar = styled.button`
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  padding: 4px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
`
