const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../services/imagekit.service");
const albumModel = require("../models/album.model");

async function createMusic(req, res) {
  
    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file);

    const music = await musicModel.create({
      uri: result.url,
      artist: req.user.id,
      title,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        title: music.title,
        url: music.uri,
        artist: music.artist,
      },
    });
  
}

async function createAlbum(req, res) {
  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    musics,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Album created successfully",

    album: {
      id: album._id,
      title,
      artist: req.user.id,
      musics,
    },
  });

}

async function getAllMusic(req,res) {
  const musics = await musicModel
  .find()
  .limit(1);
  res.status(200).json({
    message:"musics fetched successfully",
    musics
  })
}

async function getAllAlbum(req,res) {
  const albums = await albumModel.find()
   res.status(200).json({
    message:"albums fetched successfully",
    albums
  })
}

async function getAlbumById(req,res) {
  const albumId = req.params.albumId;

  const album = await musicModel.findById(albumId).populate("artist","username email ")
   res.status(200).json({
    message:"album fetched successfully",
    album 
  })
}

module.exports = { createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById };
