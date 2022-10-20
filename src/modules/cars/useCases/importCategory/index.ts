import { CategoriesRepository } from '../../repositories/categories-repository'
import { ImportCategoryController } from './import-category-controller'
import { ImportCategoryUsecase } from './import-category-usecase'

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUsecase = new ImportCategoryUsecase(categoriesRepository)
export const importCategortController = new ImportCategoryController(importCategoryUsecase)
