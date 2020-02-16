const mongoose = require('mongoose');
//define a schema /blueprint Note : id is not a part of the schema

const capstoneSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  ContactName: { type: String, required: false },
  ContactPhone: { type: String, required: false },
  ContactEmail: { type: String, required: false },
  JobTitle: { type: String, required: false },
  CompanyName: { type: String, required: false },
  Address: { type: String, required: false },
  Website: { type: String, required: false },
  ProjectTitle: { type: String, required: false },
  Description: { type: String, required: false },
  Requirements: { type: String, required: false },
  MileStone1: { type: String, required: false },
  MileStone2: { type: String, required: false },
  Milestone3: { type: String, required: false },
  BenefitStudent: { type: String, required: false },
  BenefitSponsor: { type: String, required: false },
  Provide: { type: String, required: false },
  Skill0: { type: String, required: false },
  Skill1: { type: String, required: false },
  Skill2: { type: String, required: false },
  Skill3: { type: String, required: false },
  Skill4: { type: String, required: false },
  Skill5: { type: String, required: false },
  Skill6: { type: String, required: false },
  Skill7: { type: String, required: false },
  Skill8: { type: String, required: false },
  Skill9: { type: String, required: false },
  RequireNDA: { type: String, required: false },
  RetainIP: { type: String, required: false },
  WorkonSite: { type: String, required: false },
  SponsorSitePresentation: { type: String, required: false },
  CampusPresentation: { type: String, required: false },
  VideoPresentation: { type: String, required: false },
  NumberofTeams: { type: String, required: false },
  sixToNineVirtual: { type: String, required: false },
  sixToNineInPerson: { type: String, required: false },
  nineToTwelveVirtual: { type: String, required: false },
  nineToTwelveInPerson: { type: String, required: false },
  twelveToThreeVirtual: { type: String, required: false },
  twelveToThreeInPerson: { type: String, required: false },
  threeToFiveVirtual: { type: String, required: false },
  threeToFiveInPerson: { type: String, required: false },
  AdditionalAvailability: { type: String, required: false },
  DateEntered: { type: Date, required: false }
});

module.exports = mongoose.model('CapstoneProjects', capstoneSchema, 'CapstoneProjects');