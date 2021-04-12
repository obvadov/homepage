import express from 'express'
const router = express.Router();

import { getAllUsers, createUser} from "../../controllers/v1/users.ctrl";


router.route("/")
    .get(
        /*list of accesControl, Validation Functions*/
        getAllUsers
)
    .post(/*list of accesControl, Validation Functions*/
        createUser)

export default router