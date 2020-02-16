import { Component, OnInit, Input } from '@angular/core';
import { CapstoneService } from './capstone.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ICapstone } from './capstone-project-form';

@Component({
  selector: 'app-capstone-project-form',
  templateUrl: './capstone-project-form.component.html',
  styleUrls: ['./capstone-project-form.component.css']
})
export class CapstoneProjectFormComponent implements OnInit {

  capstoneForm: FormGroup;
  today = new Date();
  tempUserID = 'tempUserID';
  private mode = 'add';
  private id: string; //capstone i=ID
  // capstone: {};

  constructor(private fb: FormBuilder, private _myService: CapstoneService) { }

  ngOnInit() {

    this.capstoneForm = this.fb.group({
      contactname: [''],
      contactjobtitle: [''],
      contactemail: [''],
      contactphone: [''],
      orgcomname: [''],
      orgaddress: [''],
      orgwebsite: [''],
      projecttitle: [''],
      descrproject: [''],
      studduties: [''],
      milestone1: [''],
      milestone2: [''],
      milestone3: [''],
      projbenefittostud: [''],
      projbenefittosponsor: [''],
      whatcmpprovide: [''],
      skillsRequired: new FormArray([]),
      Skill0: [''],
      Skill1: [''],
      Skill2: [''],
      Skill3: [''],
      Skill4: [''],
      Skill5: [''],
      Skill6: [''],
      Skill7: [''],
      Skill8: [''],
      Skill9: [''],
      NDAorMOU: [''],
      RetainIP: [''],
      WorkOnsite: [''],
      PresentationOnsite: [''],
      FirstWeekPresentation: [''],
      VideoPresentation: [''],
      TeamSponsor: [''],
      sixToNineVirtual: [''],
      sixToNineInPerson: [''],
      nineToTwelveVirtual: [''],
      nineToTwelveInPerson: [''],
      twelveToThreeVirtual: [''],
      twelveToThreeInPerson: [''],
      threeToFiveVirtual: [''],
      threeToFiveInPerson: [''],
      addavailability: ['']
    })
  }
  getCapstoneObj() {
    let thisObj: ICapstone = {
      userId: this.tempUserID,
      ContactName: this.capstoneForm.get('contactname').value,
      ContactPhone: this.capstoneForm.get('contactjobtitle').value,
      ContactEmail: this.capstoneForm.get('contactemail').value,
      JobTitle: this.capstoneForm.get('contactphone').value,
      CompanyName: this.capstoneForm.get('orgcomname').value,
      Address: this.capstoneForm.get('orgaddress').value,
      Website: this.capstoneForm.get('orgwebsite').value,
      ProjectTitle: this.capstoneForm.get('projecttitle').value,
      Description: this.capstoneForm.get('descrproject').value,
      Requirements: this.capstoneForm.get('studduties').value,
      MileStone1: this.capstoneForm.get('milestone1').value,
      MileStone2: this.capstoneForm.get('milestone2').value,
      Milestone3: this.capstoneForm.get('milestone3').value,
      BenefitStudent: this.capstoneForm.get('projbenefittostud').value,
      BenefitSponsor: this.capstoneForm.get('projbenefittosponsor').value,
      Provide: this.capstoneForm.get('whatcmpprovide').value,
      Skill0: this.capstoneForm.get('Skill0').value,
      Skill1: this.capstoneForm.get('Skill1').value,
      Skill2: this.capstoneForm.get('Skill2').value,
      Skill3: this.capstoneForm.get('Skill3').value,
      Skill4: this.capstoneForm.get('Skill4').value,
      Skill5: this.capstoneForm.get('Skill5').value,
      Skill6: this.capstoneForm.get('Skill6').value,
      Skill7: this.capstoneForm.get('Skill7').value,
      Skill8: this.capstoneForm.get('Skill8').value,
      Skill9: this.capstoneForm.get('Skill9').value,
      RequireNDA: this.capstoneForm.get('NDAorMOU').value,
      RetainIP: this.capstoneForm.get('RetainIP').value,
      WorkonSite: this.capstoneForm.get('WorkOnsite').value,
      SponsorSitePresentation: this.capstoneForm.get('PresentationOnsite').value,
      CampusPresentation: this.capstoneForm.get('FirstWeekPresentation').value,
      VideoPresentation: this.capstoneForm.get('VideoPresentation').value,
      NumberofTeams: this.capstoneForm.get('TeamSponsor').value,
      sixToNineVirtual: this.capstoneForm.get('sixToNineVirtual').value,
      sixToNineInPerson: this.capstoneForm.get('sixToNineInPerson').value,
      nineToTwelveVirtual: this.capstoneForm.get('nineToTwelveVirtual').value,
      nineToTwelveInPerson: this.capstoneForm.get('nineToTwelveInPerson').value,
      twelveToThreeVirtual: this.capstoneForm.get('twelveToThreeVirtual').value,
      twelveToThreeInPerson: this.capstoneForm.get('twelveToThreeInPerson').value,
      threeToFiveVirtual: this.capstoneForm.get('threeToFiveVirtual').value,
      threeToFiveInPerson: this.capstoneForm.get('threeToFiveInPerson').value,
      AdditionalAvailability: this.capstoneForm.get('addavailability').value,
      DateEntered: this.today
    }
    console.log("You submitted: ");
    console.log(this.capstoneForm.value);
    return thisObj;
  }

  addSkills() {
    (<FormArray>this.capstoneForm.get('skillsRequired')).push(new FormControl(''));
  }

  deleteSkills(index) {
    (<FormArray>this.capstoneForm.get('skillsRequired')).removeAt(index);
  }

  onSubmit() {
    this._myService.addCapstone(this.getCapstoneObj()).subscribe(
      data => {
        console.log('Capstone Form Entry Saved', false)
        alert('Capstone Form Data has been entered successfully!')
      },
      error => console.error(error),
      () => console.log('finished loading')
    );
    this.capstoneForm.reset();
    this.ngOnInit();
  }
}
