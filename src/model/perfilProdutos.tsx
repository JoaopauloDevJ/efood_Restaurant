class PerfilProdutos {
  title: string
  descricao: string
  image: string
  id: number

  constructor(title: string, descricao: string, image: string, id: number) {
    this.title = title
    this.descricao = descricao
    this.image = image
    this.id = id
  }
}

export default PerfilProdutos
