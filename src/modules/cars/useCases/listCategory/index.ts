import { CategoriesRepository } from '../../repositories/categories-repository'
import { ListCategoryController } from './list-category-controller'
import { ListCategoryUsecase } from './list-category-usecase'

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoryUsecase = new ListCategoryUsecase(categoriesRepository)
export const listCategoryController = new ListCategoryController(listCategoryUsecase)
