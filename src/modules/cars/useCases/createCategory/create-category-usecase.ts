import { DbCategoriesRepository } from '../../repositories/protocols/db-categories-repository'

interface CategoryRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  private readonly categoriesRepository: DbCategoriesRepository

  constructor (categoriesRepository: DbCategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute ({ name, description }: CategoryRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists !== undefined) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
