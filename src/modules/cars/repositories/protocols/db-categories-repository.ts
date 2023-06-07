import { Category } from '../../entities/category'

export interface CategoryData {
  name: string
  description: string
}

export interface DbCategoriesRepository {
  create: ({ name, description }: CategoryData) => Promise<void>
  list: () => Promise<Category[]>
  findByName: (name: string) => Promise<Category | null>
}
