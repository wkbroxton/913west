const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    projectType: {type: String, required: true},
    tier: {type: String, required: true},
    name: {type: String, required: true},
    description: String,
    link1: String,
    link2: String,
    link3: String,
    dueDate: Date,
},{
    timestamps: true,
});


module.exports = mongoose.model('Project', projectSchema);