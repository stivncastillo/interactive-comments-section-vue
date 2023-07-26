export interface Comment {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: User | null;
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
  commentsScored: number[];
}
export interface State {
  commentsModule: CommentsState;
  authModule: AuthState;
}
