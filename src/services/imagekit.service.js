const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function upload(file){
  const base64File = file.buffer.toString("base64");
  const response = await client.files.upload({
  file: base64File,
  fileName: 'musicFile.jpg'+Date.now(),
  folder: 'spotify'
});
return response 
}

module.exports = upload