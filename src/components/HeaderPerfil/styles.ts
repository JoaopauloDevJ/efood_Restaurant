import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../stylos'

export const Image = styled.image`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 63px;
  justify-content: space-between;
`

export const VerRestaurantes = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
  text-decoration: none;
`
