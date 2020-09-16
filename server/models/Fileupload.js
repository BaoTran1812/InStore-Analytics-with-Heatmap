const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileUploadSchema = new Schema({
    fileArray : {type: Array}
})

Fileupload = mongoose.model("fileUpload",fileUploadSchema)
module.exports = Fileupload