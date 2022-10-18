import { Request, Response } from "express";
import { ListCategoryUsecase } from "./list-category-usecase";

export class ListCategoryController {
    private readonly listCategoryUsecase: ListCategoryUsecase
    constructor(listCategoryUsecase: ListCategoryUsecase) {
        this.listCategoryUsecase = listCategoryUsecase
    }
    handle(request: Request, response: Response): Response {
        return response.status(200).json(this.listCategoryUsecase.execute())
    }
}