import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'IEEE-CS-TECHDAY',

  projectId: 'dowx3rh7',
  dataset: 'techday',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
