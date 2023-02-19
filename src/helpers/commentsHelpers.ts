import type { Comment } from "./../types.d";

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
