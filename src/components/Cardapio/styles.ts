import styled from 'styled-components'
import { colors } from '../../stylos'

export const CardPerfil = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.red};
`

export const ImageCard = styled.div`
  padding-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 16px;
  color: ${colors.beige};
  padding-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${colors.beige};
  padding-bottom: 8px;
`

export const BotaoCard = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  background-color: ${colors.beige};
  padding: 4px 8px;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.red};
  width: 100%;
  height: 344px;
  position: relative;
  padding: 32px;

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
  }

  > h3 {
    font-size: 18px;
    color: ${colors.beige};
    padding-bottom: 16px;
  }
`

export const BotaoModal = styled(BotaoCard)`
  width: 218px;
`

export const DescriptionModal = styled.div`
  margin-left: 32px;
`
