const Schema = require('mongoose').Schema;

const formSchema = new Schema({
  step1: {type: Schema.Types.ObjectId, ref: 'Step1'},
  step2: {type: Schema.Types.ObjectId, ref: 'Step2'},
  step3: {type: Schema.Types.ObjectId, ref: 'Step3'},
  step4: {type: Schema.Types.ObjectId, ref: 'Step4'},
  step5: {type: Schema.Types.ObjectId, ref: 'Step5'},
  step6: {type: Schema.Types.ObjectId, ref: 'Step6'},
  step7: {type: Schema.Types.ObjectId, ref: 'Step7'},
  step8: {type: Schema.Types.ObjectId, ref: 'Step8'},
}, {
  timestamps: true
});

module.exports = formSchema;
