import fs from 'fs'
import { parse } from 'csv-parse'

export class ImportCategoryUsecase {
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
