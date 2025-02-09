import mongoose from 'mongoose'

const createError = (collectionName: string) =>
  new Error(`Some referenced documents(${collectionName}) do not exist.`)

export const validateDocumentRefList = async <T, U>(
  arr: U[] | null | undefined,
  model: mongoose.Model<T>,
  mapFunc: (value: U, index: number, array: U[]) => mongoose.FilterQuery<T>
): Promise<void> => {
  if (arr && arr.length > 0) {
    const foundDocuments = model.find({
      $or: arr.map(mapFunc),
    })

    if ((await foundDocuments).length !== arr.length)
      throw createError(model.collection.collectionName)
  }
}

export const validateDocumentOneRef = async <T>(
  value: T | null | undefined,
  model: mongoose.Model<any>,
  searchObj: { [key: string]: T }
): Promise<void> => {
  if (value && (await model.find(searchObj)).length !== 1)
    throw createError(model.collection.collectionName)
}
