import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from '@/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Athena',

  projectId: 'kkdxagg1',
  dataset: 'production',

  apiVersion: '2023-04-27',

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
