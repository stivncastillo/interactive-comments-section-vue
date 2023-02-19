import { authModule } from "./modules/authModule";
export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}

export interface User {
  image: Image;
  username: string;
}

export interface Image {
  png: string;
  webp: string;
}

export interface CommentsState {
  comments: Comments[];
}
export interface AuthState {
  currentUser: User;
}
export interface State {
  commentsModule: CommentsState;
  authModule: AuthState;
}
