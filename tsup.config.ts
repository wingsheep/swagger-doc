import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/extension.ts',
  ],
  target: 'node18',
  format: ['cjs'],
  shims: false,
  dts: false,
  external: [
    'vscode',
  ],
  noExternal: [
    'axios',
    'api-spec-converter',
    '@apidevtools',
    'swagger-typescript-api',
    '@jsdevtools/ono',
  ],
})
