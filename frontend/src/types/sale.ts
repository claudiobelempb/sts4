import { Seller } from './seller'

export type Sale = {
  id: number
  visited: number
  deals: number
  amount: number
  date: string
  seller: Seller
}
