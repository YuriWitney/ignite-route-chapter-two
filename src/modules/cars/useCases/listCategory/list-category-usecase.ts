import { Category } from '../../entities/category'
import { DbCategoriesRepository } from '../../repositories/protocols/db-categories-repository'

export class ListCategoryUsecase {
  private readonly categoriesRepository: DbCategoriesRepository
  constructor (categoriesRepository: DbCategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (): Category[] {
    return this.categoriesRepository.list()
  }
}
