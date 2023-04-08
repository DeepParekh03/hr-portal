import express, { json } from "express";
import { db } from "../firebase.js";
import {
    getDatabase,
    ref,
    set,
    get,
    onValue,
    child,
    push,
      update,
  } from "firebase/database";

function generateUUID() {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export const addNotification = (req, res, next) => {
  const jsonData = req.body;
  const db = getDatabase()
  const postData = jsonData;
  const notificationid = generateUUID();
  // Get a key for a new Post.
  // const newPostKey = push(child(ref(db), 'org/'+job.email?.split('@')[0])).key;
  // Write the new post's data simultaneously in the posts list and the job's post list.
  const updates = {};
  updates['/notifications/'+notificationid] = postData;
  update(ref(db), updates);
  res.status(200).json({ message: "Success" });
}


