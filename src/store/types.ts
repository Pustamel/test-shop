export interface initialStateType {
  products: Array<product>
  basketProducts: Array<product>
}

export interface product {
  id: number
  image: string
  name: string
  price: number
}
