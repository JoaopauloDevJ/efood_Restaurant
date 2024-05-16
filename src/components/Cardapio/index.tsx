import * as S from './styles'
import fechar from '../../assets/image/close.png'
import { useState } from 'react'

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
          <S.ImageCard>{foto}</S.ImageCard>
          <S.Title>{nome}</S.Title>
          <S.Descricao>{descricao}</S.Descricao>
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
              <img src={foto} />
            </div>
            <S.DescriptionModal>
              <h3>{nome}</h3>
              <S.Descricao>{descricao}</S.Descricao>
              <S.Descricao>{porcao}</S.Descricao>
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
