import { Router } from 'express'
import multer from 'multer'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategortController } from '../modules/cars/useCases/importCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategory'

export const categoryRoutes = Router()
const upload = multer({
  dest: './tmp'
})

categoryRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoryRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response)
})

categoryRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategortController.handle(request, response)
})
