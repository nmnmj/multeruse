import express from 'express'
import formcontroller from '../controller/formcontroller.js'
import upload from '../middlewares/uploadm.js'

const router = express.Router()

//route level midlleware
router.use("/",upload.fields([
    {name:"pimage", maxCount:1},
    {name:"rdoc", maxCount:1},
]))

router.get("/", formcontroller.home)
router.post("/",formcontroller.saveProfile)


export default router