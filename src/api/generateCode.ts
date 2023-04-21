import path from 'path'
import fs from 'fs'
import _ from 'lodash'

import { generateApi } from 'swagger-typescript-api'
import type { Spec } from 'swagger-schema-official'

const FILE_PREFIX = `/* eslint-disable */
/* tslint:disable */

`

export function generateCode(data, floderPath, toJs = false) {
  return new Promise((resolve) => {
    generateApi({
      name: 'api.ts',
      output: false,
      spec: data as Spec,
      httpClientType: 'axios',
      generateClient: true,
      singleHttpClient: false,
      moduleNameFirstTag: false,
      modular: true,
      toJS: toJs,
      templates: path.resolve(process.cwd(), './src/__templates__/modular'),
    }).then(({ files }) => {
      const dir = path.resolve(floderPath, './__generated__')
      if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true })

      files.forEach(({ content, name }) => {
        fs.writeFileSync(path.resolve(dir, `./${name}`), `${FILE_PREFIX}${content}`, _.noop)
      })
      resolve(true)
    })
      .catch(e => console.error(e))
  })
}

// export function generateTemplate() {
//   return new Promise((resolve) => {
//     const data = generateTemplates({
//       cleanOutput: false,
//       output: path.resolve(process.cwd(), './src/__templates__'),
//       httpClientType: 'axios',
//       modular: false,
//       silent: false,
//     })
//     resolve(data)
//   })
// }
