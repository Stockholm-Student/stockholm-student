import mongoose, { Mongoose } from "mongoose";

export const validateDocumentRefList = async <T,S>(
  arr: any[] | null | undefined,
  model: mongoose.Model<T>,
  mapFunc: (value: any, index: number, array: any[]) => mongoose.FilterQuery<T>, thisArg?: any
): Promise<void> => {
  if(arr && arr.length > 0) {

    const foundDocuments = model.find({
      $or: arr.map(mapFunc)
    })

    if((await foundDocuments).length !== arr.length)
      throw new Error(`Some referenced documents(type ${model.collection.collectionName}) do not exist.`);

    return;
  }
} 


export const validateDocumentRef = async <T,>(
  value: T | null | undefined,
  model: mongoose.Model<any>
): Promise<void> => {

  if(value && (await model.find({ name:  value})).length !== 1)
    throw new Error(`Some referenced documents(type ${model.collection.collectionName}) do not exist.`);

  return;
}
