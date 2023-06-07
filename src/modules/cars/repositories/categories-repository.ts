import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../ormconfig'
import { Category } from '../entities/category'
import { CategoryData, DbCategoriesRepository } from './protocols/db-categories-repository'

export class CategoriesRepository implements DbCategoriesRepository {
  private readonly repository: Repository<Category>
  private static instance: CategoriesRepository

  private constructor () {
    this.repository = AppDataSource.getRepository(Category)
  }

  public static getInstance (): CategoriesRepository {
    if (CategoriesRepository.instance === undefined) {
      CategoriesRepository.instance = new CategoriesRepository()
    }
    return CategoriesRepository.instance
  }

  async create ({ name, description }: CategoryData): Promise<void> {
    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category)
  }

  async list (): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName (name: string): Promise<Category | null> {
    const category = await this.repository.findOne({ where: { name } })
    return category
  }
}
