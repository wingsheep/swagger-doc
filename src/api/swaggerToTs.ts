import path from 'path'
import { generateApi, generateTemplates } from 'swagger-typescript-api'
import type { Spec } from 'swagger-schema-official'
import swaggerJSON from '../../backend/mock/swagger.json'
export function generate() {
  return new Promise((resolve) => {
    generateApi({
      name: 'MySuperbApi.ts',
      // path: '/home/monthlySummary',
      // set to `false` to prevent the tool from writing to disk
      output: path.resolve(process.cwd(), './src/__generated__'),
      url: '/home/monthlySummary',
      spec: swaggerJSON as Spec,
      httpClientType: 'axios',
      generateClient: true,
      singleHttpClient: true,
      templates: path.resolve(process.cwd(), '../src/__templates__'),
    }).then(({ files, configuration }) => {
      resolve([])
    })
      .catch(e => console.error(e))
  })
}

export function generateTemplate() {
  return new Promise((resolve) => {
    const data = generateTemplates({
      cleanOutput: false,
      output: path.resolve(process.cwd(), './src/__templates__'),
      httpClientType: 'axios',
      modular: false,
      silent: false,
    })
    resolve(data)
  })
}
