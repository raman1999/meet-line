import { doc, writeBatch } from "firebase/firestore";
import { db } from "./firebase-config";
const short = require("short-uuid");

const createUser = async (name, email, userID) => {
  const batch = writeBatch(db);
  try {
    const userRef = doc(db, userID, "userData");
    batch.set(userRef, {
      name,
      email,
      handle: "",
      bio: "",
      dp: "",
      website: "",
    });
    const postRef = doc(db, userID, "posts");
    const likedPostRef = doc(db, userID, "likedPost");
    const followRef = doc(db, userID, "follow");
    const bookmarkRef = doc(db, userID, "bookmarks");
    const userArrRef = doc(db, "users", userID);
    const draftRef = doc(db, userID, "drafts");
    const notificationRef = doc(db, userID, "notifications");

    batch.set(postRef, { posts: [] });
    batch.set(followRef, { following: [], followers: [] });
    batch.set(likedPostRef, { likedPost: [] });
    batch.set(bookmarkRef, { bookmarks: [] });
    batch.set(userArrRef, {
      name,
      dp: "",
      handle: "",
    });
    batch.set(notificationRef, { notifications: [] });
    batch.set(draftRef, {});

    await batch.commit();
  } catch (err) {
    throw err.message;
  }
};

export { createUser };
