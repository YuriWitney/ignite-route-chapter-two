import { CategoriesRepository } from '../../repositories/categories-repository'
import { CreateCategoryController } from './create-category-controller'
import { CreateCategoryUseCase } from './create-category-usecase'

const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)
