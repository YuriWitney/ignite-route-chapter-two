import fs from 'fs'
import { parse } from 'csv-parse'
import { CategoriesRepository } from '../../repositories/categories-repository'

export class ImportCategoryUsecase {
  private readonly categoriesRepository: CategoriesRepository

  constructor (categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (file: Express.Multer.File | undefined): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const stream = fs.createReadStream(file!.path)

    const parseFile = parse()

    stream.pipe(parseFile)

    parseFile.on('data', (line) => {
      console.log(line)
    })

    console.log(file)
  }
}
