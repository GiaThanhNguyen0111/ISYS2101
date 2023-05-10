const mongoose = require('mongoose');

const methodSchema = ({
    name: String
});

const Method = mongoose.model('Method', methodSchema);

Method.createCollection();

module.exports = {
    methodSchema: methodSchema,
    Method: Method,
}