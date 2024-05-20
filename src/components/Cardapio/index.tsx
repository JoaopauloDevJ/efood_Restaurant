import * as S from './styles'
import fechar from '../../assets/image/close.png'
import { useState } from 'react'
import { getDescription } from '../Restaurante'

export type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ModalState = {
  isVsisble: boolean
}

const Cardapio = ({ foto, preco, nome, descricao, porcao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVsisble: false
  })

  const closeModal = () => {
    setModal({
      isVsisble: false
    })
  }
  return (
    <>
      <div className="container">
        <S.CardPerfil>
          <S.ImageCard>
            <img src={foto} alt={`Imagem do prato, ${nome}`} />
          </S.ImageCard>
          <S.Title>{nome}</S.Title>
          <S.Descricao>{getDescription(descricao)}</S.Descricao>
          <S.BotaoCard
            onClick={() => {
              setModal({
                isVsisble: true
              })
            }}
          >
            Adicionar ao carrinho
          </S.BotaoCard>
        </S.CardPerfil>
        <S.Modal className={modal.isVsisble ? 'visivel' : ''}>
          <S.ModalContent>
            <img src={fechar} onClick={() => closeModal()} />
            <div>
              <S.ImageModal src={foto} alt={`Imagem do prato, ${nome}`} />
            </div>
            <S.DescriptionModal>
              <h3>{nome}</h3>
              <S.Descricao>
                {descricao}
                <span>{porcao}</span>
              </S.Descricao>
              <S.BotaoModal>{`Adicionar ao carrinho ${preco}`}</S.BotaoModal>
            </S.DescriptionModal>
          </S.ModalContent>
          <div className="overlay" onClick={() => closeModal()}></div>
        </S.Modal>
      </div>
    </>
  )
}

export default Cardapio
