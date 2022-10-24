/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fs from 'fs'
import { parse } from 'csv-parse'
import { CategoriesRepository } from '../../repositories/categories-repository'

interface ImportCategory {
  name: string
  description: string
}

export class ImportCategoryUsecase {
  private readonly categoriesRepository: CategoriesRepository

  constructor (categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async loadCategories (file: Express.Multer.File | undefined): Promise<ImportCategory[]> {
    return await new Promise((resolve, reject) => {
      const categories: ImportCategory[] = []
      const stream = fs.createReadStream(file!.path)

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile.on('data', (line) => {
        const [name, description] = line
        categories.push({
          name,
          description
        })
      })
        .on('end', () => {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          fs.promises.unlink(file!.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute (file: Express.Multer.File | undefined): Promise<void> {
    const categories = await this.loadCategories(file)
    categories.map(async (category) => {
      const { name, description } = category

      const existsCategory = this.categoriesRepository.findByName(name)
      if (existsCategory === undefined) {
        this.categoriesRepository.create({
          name,
          description
        })
      }
    })
  }
}
