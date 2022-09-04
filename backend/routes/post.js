const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/", auth, postCtrl.createpost);
router.post("/:id/share", auth, postCtrl.sharepost);
router.delete("/:id", auth, postCtrl.deletepost);
router.get("/", auth, postCtrl.getAllposts);
router.get("/:id", auth, postCtrl.getPersonsposts);

module.exports = router;