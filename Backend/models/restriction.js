const mongoose = require('mongoose');

const restrictionSchema = ({
    name: String
});

const Restriction = new mongoose.model('Restriction', restrictionSchema);


module.exports = {
    restrictionSchema: restrictionSchema,
    Restriction: Restriction
};