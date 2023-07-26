import type { Comment } from "./../types.d";

export const NEW_COMMENT: Comment = {
  id: 0,
  content: "",
  createdAt: new Date().toDateString(),
  score: 0,
  user: null,
};

export function findObjectById(arr: Comment[], id: number): Comment | null {
  for (const obj of arr) {
    if (obj.id === id) {
      return obj;
    }
    if (obj.replies) {
      const foundObj = findObjectById(obj.replies, id);
      if (foundObj) {
        return foundObj;
      }
    }
  }
  return null;
}

export function deleteComment(
  comments: Comment[] | undefined,
  idToDelete: number
) {
  if (!comments) return false;

  for (let i = 0; i < comments.length; i++) {
    console.log("eliminado", idToDelete, comments[i].id);
    if (comments[i].id === idToDelete) {
      comments.splice(i, 1);
      return true;
    }
    if (comments[i]?.replies) {
      if (deleteComment(comments[i].replies, idToDelete)) {
        return true;
      }
    }
  }
  return false;
}

export function addComment(
  comments: Comment[],
  parentId: number,
  newComment: Comment
): Comment[] {
  comments.forEach(function (comment) {
    if (comment.id === parentId) {
      if (!comment.replies) {
        comment.replies = [];
      }
      comment.replies.push(newComment);
    } else if (comment.replies) {
      addComment(comment.replies, parentId, newComment);
    }
  });
  return comments;
}
