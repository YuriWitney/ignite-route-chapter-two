import { Category } from '../model/category'
import { CategoryData, DbCategoriesRepository } from './protocols/db-categories-repository'

export class CategoriesRepository implements DbCategoriesRepository {
  private readonly categories: Category[]
  private static instance: CategoriesRepository

  private constructor () {
    this.categories = []
  }

  public static getInstance() {
    if(CategoriesRepository.instance === undefined) {
      CategoriesRepository.instance = new CategoriesRepository()
    }
    return CategoriesRepository.instance
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
