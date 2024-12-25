interface IComment {
  _id: string,
  authorId: string,
  eventId: string, // missing in figma but seems essential 
  content: string,
  createdAt: Date,
}


interface IWikiArticle {
  // not implemented
}

interface IEventAttendee {
  // not implemented
}

interface IPartner {
  // not implemented
}

interface INotification {
  // not implemented
}
