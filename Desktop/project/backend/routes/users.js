import express from "express"
import { verifytoken } from "../middlewares/auth.js";

import {getUser,getUserFriends,addRemoveFriend} from "../controllers/users.js";
const router=express.Router();

router.get("/:id",verifytoken,getUser);
router.get("/:id/friends",verifytoken,getUserFriends);

router.patch("/:id/:friendId",verifytoken,addRemoveFriend);
export default router;