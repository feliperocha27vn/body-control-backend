// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      firstName: string
      lastName: string
      height: number
      weight: number
      gender: boolean
      birthDate: Date
    }
  }
}
