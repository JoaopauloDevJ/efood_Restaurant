import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remover, closeCartSidebar } from '../../store/reducers/Cart'
import { formataPreco } from '../Cardapio'
import Checkout from '../Checkout'

const Cart = () => {
  const { items, isOpen, openSidebar } = useSelector(
    (state: RootReducer) => state.adicionar
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remover(id))
  }

  const irParaEntrega = () => {
    dispatch(closeCartSidebar())
  }

  const getPriceTotal = () => {
    return items.reduce((precoProduto, somaPrecos) => {
      return (precoProduto += somaPrecos.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      {items.length > 0 ? (
        <S.Sidebar className={openSidebar ? 'is-visible' : ''}>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={`Imagem do prato, ${item.nome}`} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <button type="button" onClick={() => removeCart(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <S.ResumoPedido>
            Valor total: <span>{formataPreco(getPriceTotal())}</span>
          </S.ResumoPedido>
          <S.ButtonSidebar type="button" onClick={irParaEntrega}>
            Continuar com a entrega
          </S.ButtonSidebar>
        </S.Sidebar>
      ) : (
        <p>O carrinho está vazio</p>
      )}
      <Checkout />
    </S.CartContainer>
  )
}

export default Cart
