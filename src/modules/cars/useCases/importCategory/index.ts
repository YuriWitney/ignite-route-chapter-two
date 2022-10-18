import { ImportCategoryController } from './import-category-controller'
import { ImportCategoryUsecase } from './import-category-usecase'

const importCategoryUsecase = new ImportCategoryUsecase()
export const importCategortController = new ImportCategoryController(importCategoryUsecase)
