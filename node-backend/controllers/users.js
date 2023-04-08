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

export const addUser = (req, res, next) => {
    const jsonData = req.body;
    console.log(jsonData)
    const db = getDatabase()
    const postData = jsonData;
    const userid = generateUUID();
    // Get a key for a new Post.
    // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/users/'+userid] = postData;
    update(ref(db), updates);
    res.status(200).json({ message: "Success" });
}

export const updateUser = (req, res, next) => {
    const jsonData = req.body;
    console.log(jsonData)
    const db = getDatabase()
    // set(ref(db, 'users'), {
    const postData = jsonData;
    const userid = jsonData["userid"];
    jsonData["userid"] = null;
    const pathRef = ref(db, "/users/"+userid)
    
    // Get a key for a new Post.
    // const newPostKey = push(child(ref(db), 'org/'+user.email?.split('@')[0])).key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/users/'+userid] = postData
    update(ref(db), updates);
    res.status(200).json({ message:"Success"});
}

export const getAllUsers = (req, res, next) => {
    const db = getDatabase()
    onValue(ref(db, 'users/'), (snapshot) => {
      const data = snapshot.val();
      res.status(200).json(data);
    });
}

export const getUserbyID = (req, res, next) => {
    const userid = req.body.userid;
    const pathRef = ref(db, "/users/"+userid)
    onValue(
      pathRef,
      (snapshot) => {
        const userData = snapshot.val();
        console.log(userData);
        res.send(userData)
      },
      (error) => {
        res.status(404).send("User not found")
      }
    );
};
