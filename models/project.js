const mongoose = require('mongoose');
const projectSchema = require('./projectSchema');
  
module.exports = mongoose.model('Project', projectSchema);