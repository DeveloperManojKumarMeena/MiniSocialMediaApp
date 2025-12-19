const ImageKit = require('imagekit')
const { v4: uuidv4 } = require("uuid")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload(
            {
                file: file,          // buffer ya base64
                fileName: uuidv4(),
                folder: "Social-uploads",
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );
    });
}

module.exports = { uploadFile };
