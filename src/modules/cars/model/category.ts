import { v4 as uuidV4 } from 'uuid'

export class Category {
  id?: string
  name: string
  description: string
  created_at: Date

  constructor () {
    if (this.id === undefined) {
      this.id = uuidV4()
    }
  }
}
