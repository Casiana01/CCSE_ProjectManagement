const mongoose = require('mongoose');
//define a schema /blueprint Note : id is not a part of the schema

const contractSchema = new mongoose.Schema({
    CompanyName: { type: String, required: false },
    CompanyAddress: { type: String, required: false },
    CompanyTitle: { type: String, required: false },
    AgreedDate: { type: Date, required: false },
    PaymentOnStart: { type: String, required: false },
    PaymentOnCompletion: { type: String, required: false },
    TotalAmount: { type: String, required: false },
    Sponsor: { type: String, required: false },
    Organization: { type: String, required: false },
    JobTitle: { type: String, required: false },
    SponsorUserid: { type: String, required: false },
    TermStartDate: { type: Date, required: false },
    TermEndDate: { type: Date, required: false },
    DateEntered: { type: Date, required: false }
});

module.exports = mongoose.model('ContractProjects', contractSchema, 'ContractProjects');