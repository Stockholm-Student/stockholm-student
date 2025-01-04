
export interface IEvent {
  // _id: string,
  // creatorId: string
  name: string, 
  // title: string,
  // description: string,
  // date: Date,
  // time: string, // should be part of date object?
  // location: string, // geoJSON?
  // categories: string, // string[]?
  // maxAttendees: number,
  // images: string[], // string[] of uri:s?
  // isPublished: boolean,
  // createdAt: Date,
  // lastUpdatedAt: Date,
}





export const mockDBEvents: IEvent[] = [
  { name: "party 1" },
  { name: "party 2" },
  { name: "party 3" },
  { name: "party 4" },
]


