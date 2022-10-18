import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './create-category-usecase'

export class CreateCategoryController {
  private readonly createCategoryUseCase: CreateCategoryUseCase

  constructor (createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  handle (request: Request, response: Response): Response {
    const { name, description } = request.body

    this.createCategoryUseCase.execute({ name, description })

    return response.status(201).send()
  }
}
