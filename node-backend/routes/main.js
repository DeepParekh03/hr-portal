import express, { json } from "express";
import {addUser, updateUser, getAllUsers, getUserbyID, updateUserStatus} from "../controllers/users.js"
import {addJob, getAllJobs, getJobbyID, updateJob, ApplytoJob} from "../controllers/jobs.js"
import {addNotification} from "../controllers/notifications.js"

const router = express.Router();

router.post('/register', addUser)
router.post('/updateUser', updateUser)
router.post('/getUserbyID', getUserbyID)
router.get('/getAllUsers', getAllUsers)
router.post('/addEmployee', updateUserStatus)
// router.post('/')

router.post("/addJob", addJob)
router.get("/getAllJobs", getAllJobs)
router.post("/updateJob", updateJob)
router.post("/getJobbyID", getJobbyID)
router.post("/applytoJob", ApplytoJob)

router.post("/addNotification", addNotification) 






export default router;





