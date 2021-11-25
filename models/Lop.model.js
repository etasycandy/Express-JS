var mongooes = require('mongoose');

var lopSchema = mongooes.Schema({
    tenLop: {
        type: String,
        trim: true,
        required: true,
    },
    maKhoa: {
        type: String,
        trim: true,
    },
});

module.exports = mongooes.model('lop', lopSchema);