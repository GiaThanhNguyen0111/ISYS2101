const mongoose = require('mongoose');

const methodSchema = ({
    name: String
});

const Method = new mongoose.model('Method', methodSchema);

module.exports = {
    Method: Method,
    methodSchema: methodSchema
}