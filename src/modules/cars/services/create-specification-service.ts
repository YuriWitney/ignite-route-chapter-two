import { DbSpecificationsRepository } from '../repositories/protocols/db-specifications-repository'

export interface SpecificationRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  private readonly SpecificationsRepository: DbSpecificationsRepository

  constructor (SpecificationsRepository: DbSpecificationsRepository) {
    this.SpecificationsRepository = SpecificationsRepository
  }

  execute ({ name, description }: SpecificationRequest): void {
    const specificationAlreadyExists = this.SpecificationsRepository.findByName(name)

    if (specificationAlreadyExists !== undefined) {
      throw new Error('Specification already exists')
    }

    this.SpecificationsRepository.create({
      name,
      description
    })
  }
}