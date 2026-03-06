const express = require("express");
const route = express();
const multer = require("multer");
const authMiddlware = require("../middlewares/auth.middleware");

const upload = multer({
  storage: multer.memoryStorage(),
});

const musicController = require("../controllers/music.controller");

route.post(
  "/create",
  authMiddlware.adminAuth,
  upload.single("music"),
  musicController.createMusic,
);
route.post(
  "/create-album",
  authMiddlware.adminAuth,
  musicController.createAlbum,
);

route.get("/", authMiddlware.userAuth,  musicController.getAllMusic);
route.get("/albums", authMiddlware.userAuth,  musicController.getAllAlbum);
route.get("/album/:albumId", authMiddlware.userAuth,  musicController.getAlbumById );

module.exports = route;
