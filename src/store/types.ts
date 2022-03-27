export type initialStateType = {
  products: Array<product>
  basketProducts: Array<product>
}

export type product = {
  id: number
  image: string
  name: string
  price: number
}
