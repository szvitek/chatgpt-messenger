interface Message {
  text: string;
  createdAt: admin.forestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  }
}