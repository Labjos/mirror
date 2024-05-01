const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const style = required('../data/styles.json');



const localSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Name is required'
        },
        style: {
            type: String,
            enum: style,
            required: 'Style is required'
        },
        address: {
            type: String,
            required: ' Address of Local is required'
        },
        location: {
            type: {
                type: String,
                enum: ['point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        },
        capacity: {
            type: Number,
            min: [0, 'No minimum of people'],
            max: [100, 'maxim number of people in the room'],
        },
        image: {
            type: Image,
            min: [3, 'pictures of local'],
            required: true
        }
        },
    {
        timestamps: true
    }
);

localSchema.index({ location: '2dsphere'});
module.exports = mongoose.model('Local', localSchema);