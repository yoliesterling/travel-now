const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    notes: String
}, {
    timestamps: true
});

const tripSchema = new Schema({
    tripName: String,
    startDate: {type: Date},
    endDate: {type: Date},
    locationOne: String,
    locationTwo: String,
    locationThree: String,
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    notes: [noteSchema]
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);