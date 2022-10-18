import { SpecificationsRepository } from "../../repositories/specifications-repository";
import { CreateSpecificationUseCase } from "./create-specification-useCase";
import { CreateSpecificationController } from "./create-specification-controller";

const specificationRepository = SpecificationsRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)