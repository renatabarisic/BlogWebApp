export interface Post {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  imageUrl: string;
  urlHandle: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
}
