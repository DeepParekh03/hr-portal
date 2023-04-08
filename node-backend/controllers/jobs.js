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

export const addJob = (req, res, next) => {
  const jsonData = req.body;
  const db = getDatabase()
  const postData = jsonData;
  const jobid = generateUUID();
  // Get a key for a new Post.
  // const newPostKey = push(child(ref(db), 'org/'+job.email?.split('@')[0])).key;
  // Write the new post's data simultaneously in the posts list and the job's post list.
  const updates = {};
  updates['/jobs/'+jobid] = postData;
  update(ref(db), updates);
  res.status(200).json({ message: "Success" });
}

export const updateJob = (req, res, next) => {
    const jsonData = req.body;
    console.log(jsonData)
    const db = getDatabase()
    const postData = jsonData;
    const jobid = jsonData["jobid"];
    jsonData["jobid"] = null;
    const pathRef = ref(db, "/jobs/"+jobid)
    
    // Get a key for a new Post.
    // const newPostKey = push(child(ref(db), 'org/'+job.email?.split('@')[0])).key;
    // Write the new post's data simultaneously in the posts list and the job's post list.
    const updates = {};
    updates['/jobs/'+jobid] = postData
    update(ref(db), updates);
    res.status(200).json({ message:"Success"});
}

export const getAllJobs = (req, res, next) => {
    const db = getDatabase()
    onValue(ref(db, 'jobs/'), (snapshot) => {
      const data = snapshot.val();
      res.status(200).json(data);
    });
}

export const getJobbyID = (req, res, next) => {
    const jobid = req.body.jobid;
    const pathRef = ref(db, "/jobs/"+jobid)
    onValue(
      pathRef,
      (snapshot) => {
        const jobData = snapshot.val();
        console.log(jobData);
        res.send(jobData)
      },
      (error) => {
        res.status(404).send("job not found")
      }
    );
};

export const ApplytoJob = (req, res, next) => {
  //reqd user id and job id
  const jsonData = req.body;
  jsonData["userid"] = req.body.userid;
  jsonData["jobid"] = req.body.jobid;
  const updates={}
  updates['/jobs/'+jsonData["jobid"]+'/applicants/'+jsonData["userid"]]=""
  updates['/users/'+jsonData["userid"]+'/applied/'+jsonData["jobid"]]=""
  update(ref(db), updates);
  res.status(200).send("Successfuly Applied to Job")
}
