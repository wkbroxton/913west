const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intakeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    stepsForm: [stepFormSchema],
    isCompleted: { type: Boolean, default: false }
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });
  
  intakeSchema.virtual('intakeTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
  });
  
  intakeSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, item) => total + item.qty, 0);
  });
  
  intakeSchema.virtual('intakeId').get(function() {
    return this.id.slice(-6).toUpperCase();
  });
  
  intakeSchema.statics.getForm = function(userId) {
    // 'this' is the Intake model
    return this.findOneAndUpdate(
      // query
      { user: userId, isCompleted: false },
      // update - in the case of upserting
      // this object is the data for the new Intake doc
      { user: userId },
      // upsert options 
      { upsert: true, new: true }
    );
  };
  
  intakeSchema.methods.addItemToForm = async function(itemId) {
    // 'this' is bound to the form (intake doc)
    const form = this;
    // Check if the step is already in the form
    const lineItem = form.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem) {
      // Item already exists, increase its qty
      lineItem.qty += 1;
    } else {
      const item = await mongoose.model('Item').findById(itemId);
      form.lineItems.push({ item });
    }
    return form.save();
  };
  
  intakeSchema.methods.setItemQty = function(itemId, newQty) {
    // this keyword is bound to the form (intake doc)
    const form = this;
    // Find the line item in the form for the menu item
    const lineItem = form.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem && newQty <= 0) {
      // Calling remove, removes itself from the form.lineItems array
      lineItem.remove();
    } else if (lineItem) {
      // Set the new qty - positive value is assured thanks to prev if
      lineItem.qty = newQty;
    }
    // return the save() method's promise
    return form.save();
  };
  
  module.exports = mongoose.model('Intake', intakeSchema);
    
//     step1: {
//         type: [String],
//         required: true,
//     },
//     step2: {
//         type: [String],
//         required: true,
//     },
//     step3: {
//         name: String,
//         description: String,

//         }

// });

// mongoose.model.exports = mongoose.model('Intake', intakeSchema)