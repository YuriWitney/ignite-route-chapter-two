import { Specification } from '../../model/specification'

export interface SpecificationData {
  name: string
  description: string
}

export interface DbSpecificationsRepository {
  create: ({ name, description }: SpecificationData) => void
  findByName: (name: string) => Specification | undefined
}
