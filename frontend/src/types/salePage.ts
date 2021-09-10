import { Sale } from './sale'

export type SalePage = {
  content?: Sale[]
  last: boolean
  totalElements: number
  totalPages: number
  size?: number
  number: number
  first: boolean
  numberOfElements?: number
  empty?: boolean
}
