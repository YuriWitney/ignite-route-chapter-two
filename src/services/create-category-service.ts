import { CategoriesRepository } from '../repositories/categories-repository'

interface CategoryRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  private readonly categoriesRepository: CategoriesRepository

  constructor (categoriesRepository: CategoriesRepository) {
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
