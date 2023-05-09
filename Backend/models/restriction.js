const mongoose = require('mongoose');

const restrictionSchema = ({
    name: String
}
);

const Restriction =  mongoose.model('Restriction', restrictionSchema);

 Restriction.createCollection();

module.exports = {
    restrictionSchema: restrictionSchema,
    Restriction: Restriction
};