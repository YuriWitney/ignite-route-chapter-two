import { Category } from '../model/category'

interface CategoryData {
  name: string
  description: string
}

export class CategoriesRepository {
  private readonly categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ name, description }: CategoryData): void {
    const newCategory = new Category()

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(newCategory)
  }

  list (): Category[] {
    return this.categories
  }

  findByName (name: string): Category | undefined {
    return this.categories.find(category => category.name === name)
  }
}
