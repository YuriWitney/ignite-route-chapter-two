import { Category } from '../../entities/category'

export interface CategoryData {
  name: string
  description: string
}

export interface DbCategoriesRepository {
  create: ({ name, description }: CategoryData) => void
  list: () => Category[]
  findByName: (name: string) => Category | undefined
}
