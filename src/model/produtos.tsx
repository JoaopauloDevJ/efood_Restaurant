class Produto {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
  id: number

  constructor(
    title: string,
    description: string,
    infos: string[],
    image: string,
    nota: number,
    id: number
  ) {
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
    this.nota = nota
    this.id = id
  }
}

export default Produto
