import { Specification } from '../../entities/specification'

export interface SpecificationData {
  name: string
  description: string
}

export interface DbSpecificationsRepository {
  create: ({ name, description }: SpecificationData) => void
  findByName: (name: string) => Specification | undefined
}
