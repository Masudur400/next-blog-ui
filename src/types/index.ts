export interface IUser {
  id: number;
  name: string;
  email: string;
  picture?: string;
  isVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  author: IUser; // relation
  createdAt: Date;
  updatedAt: Date;
}
