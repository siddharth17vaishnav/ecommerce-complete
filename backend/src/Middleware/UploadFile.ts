import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../backend/src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.replaceAll(" ", ""))
    }
})

const upload = multer({ storage: storage })

export default upload
