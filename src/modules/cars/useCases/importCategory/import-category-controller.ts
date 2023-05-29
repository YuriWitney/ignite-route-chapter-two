import { Request, Response } from 'express'
import { ImportCategoryUsecase } from './import-category-usecase'

export class ImportCategoryController {
  private readonly importCategoryUsecase: ImportCategoryUsecase
  constructor (importCategoryUsecase: ImportCategoryUsecase) {
    this.importCategoryUsecase = importCategoryUsecase
  }

  handle (request: Request, response: Response): Response {
    const { file } = request
    void this.importCategoryUsecase.execute(file)
    return response.send()
  }
}
