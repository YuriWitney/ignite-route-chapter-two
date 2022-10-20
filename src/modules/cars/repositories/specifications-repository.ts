import { v4 as uuidV4 } from 'uuid'
import { Specification } from '../model/specification'
import { DbSpecificationsRepository, SpecificationData } from './protocols/db-specifications-repository'

export class SpecificationsRepository implements DbSpecificationsRepository {
  private readonly specifications: Specification[]
  private static instance: SpecificationsRepository

  private constructor () {
    this.specifications = []
  }

  public static getInstance (): SpecificationsRepository {
    if (SpecificationsRepository.instance === undefined) {
      SpecificationsRepository.instance = new SpecificationsRepository()
    }
    return SpecificationsRepository.instance
  }

  create ({ name, description }: SpecificationData): void {
    const newSpecification = new Specification()
    Object.assign(newSpecification, {
      name,
      description,
      created_at: new Date(),
      id: uuidV4()
    })

    this.specifications.push(newSpecification)
  }

  findByName (name: string): Specification | undefined {
    return this.specifications.find(specification => specification.name === name)
  }
}
