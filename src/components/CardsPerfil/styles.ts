import styled from 'styled-components'
import { colors } from '../../stylos'

export const CardPerfil = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.red};
`

export const ImageCard = styled.img`
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

export const BotaoAdicionarCarrinho = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  background-color: ${colors.beige};
  padding: 4px;
  width: 100%;
  border: none;
  cursor: pointer;
`
