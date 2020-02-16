// app.js (API)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//specify where to find the schema
//const ResearchProjects = require('./models/research')
const Contractlist = require('./models/ContractProjects');
const Capstonelist = require('./models/CapstoneProjects');
const users = require('./models/Users');


const request = require('request'); // need this for 3rd party API call

// connect and display the status 

mongoose.connect('mongodb+srv://capstone:capstone2020@capstoneprojectcluster-z3llo.mongodb.net/ccseprojects?retryWrites=true&w=majority', { useNewUrlParser: true })

  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });




// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {

  //  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  //  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
  //  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // Fix HTTP header issues when using authentication
  // https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr

  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


/****************************************
 *    capstone
 *     
 ***************************************/


/* Requests for Capstone*/
/* Find all capstone Projects in database */
app.get('/capstoneprojects', (req, res, next) => {
  //call mongoose method find 
  Capstonelist.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from capstone projects');

});


/* Find  capstone projects by user */
app.get('/capstoneprojects/user/:id', (req, res, next) => {
  let id = req.params.id;
  //call mongoose method find (MongoDB db.Students.find())
  Capstonelist.find({ userId: id }).sort('DateEntered')
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from capstoneprojects/user');

});

app.get('/capstoneprojects/edit/:id', (req, res, next) => {
  //call mongoose method find
  let id = req.params.id;
  console.log('capstoneprojects/edit id is ' + id)
  Capstonelist.findById(id)
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))

    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from capstoneprojects/edit');

});

app.post('/capstoneprojects/add', (req, res, next) => {
  // create a new project form variable and save request’s fields 

  const Capstone = req.body;
  //sent an acknowledgment back to caller 
  console.log('capstone post form:')
  console.log(Capstone)

  const Capstoneform = new Capstonelist({
    userId: req.body.userId,
    ContactName: req.body.ContactName,
    ContactPhone: req.body.ContactPhone,
    ContactEmail: req.body.ContactEmail,
    JobTitle: req.body.JobTitle,
    CompanyName: req.body.CompanyName,
    Address: req.body.Address,
    Website: req.body.Website,
    ProjectTitle: req.body.ProjectTitle,
    Description: req.body.Description,
    Requirements: req.body.Requirements,
    MileStone1: req.body.MileStone1,
    MileStone2: req.body.MileStone2,
    Milestone3: req.body.Milestone3,
    BenefitStudent: req.body.BenefitStudent,
    BenefitSponsor: req.body.BenefitSponsor,
    Provide: req.body.Provide,
    Skill0: req.body.Skill0,
    Skill1: req.body.Skill1,
    Skill2: req.body.Skill2,
    Skill3: req.body.Skill3,
    Skill4: req.body.Skill4,
    Skill5: req.body.Skill5,
    Skill6: req.body.Skill6,
    Skill7: req.body.Skill7,
    Skill8: req.body.Skill8,
    Skill9: req.body.Skill9,
    RequireNDA: req.body.RequireNDA,
    RetainIP: req.body.RetainIP,
    WorkonSite: req.body.WorkonSite,
    SponsorSitePresentation: req.body.SponsorSitePresentation,
    CampusPresentation: req.body.CampusPresentation,
    VideoPresentation: req.body.VideoPresentation,
    NumberofTeams: req.body.NumberofTeams,
    sixToNineVirtual: req.body.sixToNineVirtual,
    sixToNineInPerson: req.body.sixToNineInPerson,
    nineToTwelveVirtual: req.body.nineToTwelveVirtual,
    nineToTwelveInPerson: req.body.nineToTwelveInPerson,
    twelveToThreeVirtual: req.body.twelveToThreeVirtual,
    twelveToThreeInPerson: req.body.twelveToThreeInPerson,
    threeToFiveVirtual: req.body.threeToFiveVirtual,
    threeToFiveInPerson: req.body.threeToFiveInPerson,
    AdditionalAvailability: req.body.AdditionalAvailability,
    DateEntered: req.body.DateEntered
  });

  console.log('capstone object - Mongoose:')
  console.log(Capstoneform)

  //send the document to the database 
  Capstoneform.save()
    //in case of success
    .then(() => {
      console.log('Success');
      res.status(201).json({ 'capstoneform': 'project added successfully' });
    })
    //if error
    .catch(err => {
      console.log('Error:' + err);
      res.status(400).send("unable to save to database")
    });

  //sent an acknowledgment back to caller 
  //res.status(201).json('Post successful');
});


/* capstone projects update */
app.put('/capstoneprojects/update/:id', (req, res, next) => {
  console.log("/capstoneprojects/update id = " + req.params.id)

  // create a new capstone variable and save request’s fields 
  const capstonef = req.body;
  //sent an acknowledgment back to caller 
  console.log('capstone post form:')
  console.log(capstonef)

  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set updated field values
    Capstonelist.findOneAndUpdate({ _id: req.params.id },
      {
        $set:
        {
          ContactName: req.body.ContactName,
          ContactPhone: req.body.ContactPhone,
          ContactEmail: req.body.ContactEmail,
          JobTitle: req.body.JobTitle,
          CompanyName: req.body.CompanyName,
          Address: req.body.Address,
          Website: req.body.Website,
          ProjectTitle: req.body.ProjectTitle,
          Description: req.body.Description,
          Requirements: req.body.Requirements,
          MileStone1: req.body.MileStone1,
          MileStone2: req.body.MileStone2,
          Milestone3: req.body.Milestone3,
          BenefitStudent: req.body.BenefitStudent,
          BenefitSponsor: req.body.BenefitSponsor,
          Provide: req.body.Provide,
          Skill0: req.body.Skill0,
          Skill1: req.body.Skill1,
          Skill2: req.body.Skill2,
          Skill3: req.body.Skill3,
          Skill4: req.body.Skill4,
          Skill5: req.body.Skill5,
          Skill6: req.body.Skill6,
          Skill7: req.body.Skill7,
          Skill8: req.body.Skill8,
          Skill9: req.body.Skill9,
          RequireNDA: req.body.RequireNDA,
          RetainIP: req.body.RetainIP,
          WorkonSite: req.body.WorkonSite,
          SponsorSitePresentation: req.body.SponsorSitePresentation,
          CampusPresentation: req.body.CampusPresentation,
          VideoPresentation: req.body.VideoPresentation,
          NumberofTeams: req.body.NumberofTeams,
          sixToNineVirtual: req.body.sixToNineVirtual,
          sixToNineInPerson: req.body.sixToNineInPerson,
          nineToTwelveVirtual: req.body.nineToTwelveVirtual,
          nineToTwelveInPerson: req.body.nineToTwelveInPerson,
          twelveToThreeVirtual: req.body.twelveToThreeVirtual,
          twelveToThreeInPerson: req.body.twelveToThreeInPerson,
          threeToFiveVirtual: req.body.threeToFiveVirtual,
          threeToFiveInPerson: req.body.threeToFiveInPerson,
          AdditionalAvailability: req.body.AdditionalAvailability,
          DateEntered: req.body.DateEntered
        }
      }, { new: true })
      .then((results) => {
        if (results) { //what was updated
          console.log('capstone update results')
          console.log(results);
          res.status(200).json("Updated!");
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log('capstone update error')
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }

});


/* delete project */
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/capstoneprojects/:id", (req, res, next) => {
  console.log('app.js deletecapstone - id = ' + req.params.id)
  Capstonelist.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});


/********************************** 

* Contract Projects
 
****************************/
/* Requests for Contract*/
/* Find all contract Projects in database */
app.get('/contractprojects', (req, res, next) => {
  //call mongoose method find 
  Contractlist.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from contract projects');

});


/* Find  contract projects by user */
app.get('/contractprojects/user/:id', (req, res, next) => {
  let id = req.params.id;
  //call mongoose method find (MongoDB db.Students.find())
  Contractlist.find({ userId: id }).sort('DateEntered')
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from contractprojects/user');

});



app.get('/contractprojects/edit/:id', (req, res, next) => {
  //call mongoose method find
  let id = req.params.id;
  console.log('contractprojects/edit id is ' + id)
  Contractlist.findById(id)
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))

    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
  console.log('This is the response from contractprojects/edit');

});


app.post('/contractprojects/add', (req, res, next) => {
  // create a new project form variable and save request’s fields 

  const Contract = req.body;
  //sent an acknowledgment back to caller 
  console.log('contract post form:')
  console.log(Contract)

  const Contractform = new Contractlist({
    CompanyName: req.body.CompanyName,

    CompanyAddress: req.body.CompanyAddress,

    CompanyTitle: req.body.CompanyTitle,

    AgreedDate: req.body.AgreedDate,

    PaymentOnStart: req.body.PaymentOnStart,

    PaymentOnCompletion: req.body.PaymentOnCompletion,

    TotalAmount: req.body.TotalAmount,

    Sponsor: req.body.Sponsor,

    Organization: req.body.Organization,

    JobTitle: req.body.JobTitle,

    SponsorUserid: req.body.SponsorUserid,

    TermStartDate: req.body.TermStartDate,

    TermEndDate: req.body.TermEndDate,
    DateEntered: req.body.DateEntered
  });

  console.log('contract object - Mongoose:')
  console.log(Contractform)

  //send the document to the database 
  Contractform.save()
    //in case of success
    .then(() => {
      console.log('Success');
      res.status(201).json({ 'contractform': 'project added successfully' });
    })
    //if error
    .catch(err => {
      console.log('Error:' + err);
      res.status(400).send("unable to save to database")
    });

  //sent an acknowledgment back to caller 
  //res.status(201).json('Post successful');
});

/* capstone projects update */
app.put('/contractprojects/update/:id', (req, res, next) => {
  console.log("/contractprojects/update id = " + req.params.id)

  // create a new contract variable and save request’s fields 
  const contractf = req.body;
  //sent an acknowledgment back to caller 
  console.log('contract post form:')
  console.log(contractf)

  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set updated field values
    Contractlist.findOneAndUpdate({ _id: req.params.id },
      {
        $set:
        {
          CompanyName: req.body.CompanyName,

          CompanyAddress: req.body.CompanyAddress,

          CompanyTitle: req.body.CompanyTitle,

          AgreedDate: req.body.AgreedDate,

          PaymentOnStart: req.body.PaymentOnStart,

          PaymentOnCompletion: req.body.PaymentOnCompletion,

          TotalAmount: req.body.TotalAmount,

          Sponsor: req.body.Sponsor,

          Organization: req.body.Organization,

          JobTitle: req.body.JobTitle,

          SponsorUserid: req.body.SponsorUserid,

          TermStartDate: req.body.TermStartDate,

          TermEndDate: req.body.TermEndDate,
          DateEntered: req.body.DateEntered
        }
      }, { new: true })
      .then((results) => {
        if (results) { //what was updated
          console.log('contract update results')
          console.log(results);
          res.status(200).json("Updated!");
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log('contract update error')
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }

});


/* delete project */
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/contractprojects/:id", (req, res, next) => {
  console.log('app.js deletecontract - id = ' + req.params.id)
  Contractlist.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

/************************************
 *    USER LOGIN AND REGISTRATION
 * 
 ***********************************/
/* User Login and Registration*/

app.get("/users/authenticate/:username/:password", (req, res, next) => {

  users.find({ username: req.params.username, password: req.params.password })
    .then(result => {
      const user = {

        username: result[0].username,
        firstName: result[0].Firstname,
        lastName: result[0].Lastname

      }
      console.log(user);
      res.status(200).json(user);

    })
    .catch(err => {
      console.log('Authentication Error: ${err}');
      userFriendlyMsg = 'Cannot authenticate userid/password.'
      console.log(userFriendlyMsg)
      res.status(500).json(userFriendlyMsg);
    });


});

app.get("/users", (req, res, next) => {

  users.find().then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

app.post('/Users/register', (req, res, next) => {
  // const feedback = req.body;
  const userrecord = new users({
    Firstname: req.body.firstname,
    Lastname: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  });

  console.log('users/register')
  console.log(userrecord)
  userrecord.save()
    .then(() => { console.log('Success'); })
    .catch(err => { console.log('Error:' + err); });
  //sent an acknowledgment back to caller 
  console.log('user post form:')
  console.log(userrecord)

  res.status(201).json('Post successful');
});

/* end requests User/authentication */





//to use this middleware in other parts of the application
module.exports = app;
