import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remover } from '../../store/reducers/Cart'
import { formataPreco } from '../Cardapio'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.adicionar)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeCart = (id: number) => {
    dispatch(remover(id))
  }

  const getPriceTotal = () => {
    return items.reduce((precoProduto, somaPrecos) => {
      return (precoProduto += somaPrecos.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
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
        <S.ButtonComprar type="button">Continuar com a entrega</S.ButtonComprar>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
