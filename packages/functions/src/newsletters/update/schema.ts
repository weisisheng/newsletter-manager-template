export const bodySchema = {
  type: 'object',
  properties: {
    title: { type: 'string', maxLength: 100 },
    description: { type: 'string', maxLength: 512 },
    slug: { type: 'string', maxLength: 100 },
    image: { type: 'string', maxLength: 100 },
    content: { type: 'string', maxLength: 100 },
    contentMd: { type: 'string', maxLength: 100 },
    status: { type: 'string', maxLength: 100 },
    seo: {
      type: 'object',
      properties: {
        title: { type: 'string', maxLength: 100 },
        description: { type: 'string', maxLength: 512 },
        tags: { type: 'array', items: { type: 'string', maxLength: 100 } }
      },
      required: ['title', 'description'],
      additionalProperties: false
    }
  },
  additionalProperties: false
} as const

export const pathParametersSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', maxLength: 100, minLength: 1 }
  },
  required: ['id'],
  additionalProperties: false
} as const

export const schema = {
  type: 'object',
  properties: {
    pathParameters: pathParametersSchema,
    body: bodySchema
  }
} as const
