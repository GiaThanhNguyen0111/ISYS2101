const mongoose = require('mongoose');

const restrictionSchema = ({
    name: String
});

const Restriction = new mongoose.model('Restriction', restrictionSchema);

<<<<<<< HEAD
=======

>>>>>>> f6891376dd3a0ae5e6e9701e1adbe649d87f8ec0
module.exports = {
    restrictionSchema: restrictionSchema,
    Restriction: Restriction
};