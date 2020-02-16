import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICapstone } from './capstone-project-form';


//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CapstoneService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load data 
  getCapstoneProjects() {
    return this.http.get('http://localhost:8000/capstoneprojects');
  }

  // Uses http.get() to load data 
  getCapstoneProjectsByUser(userId) {
    return this.http.get('http://localhost:8000/capstoneprojects/user/' + userId);
  }

  editcapstone(_id: string) {
    console.log('capstone.service.editcapstone - _id = ' + _id);
    return this.http.get("http://localhost:8000/capstoneprojects/edit/" + _id);
  }

  // Uses http.post() to post data 
  addCapstone(capstoneObj: ICapstone) {
    return this.http.post('http://localhost:8000/capstoneprojects/add', capstoneObj)
  }

  updateCapstone(_id: string, capstoneObj: ICapstone) {
    return this.http.put('http://localhost:8000/capstoneprojects/update/' + _id, capstoneObj)
  }

  deletecapstone(_id: string) {
    console.log('capstone.service.deletecapstone - _id = ' + _id)
    this.http.delete("http://localhost:8000/capstoneprojects/" + _id)
      .subscribe(() => {
        console.log('Deleted: ' + _id);
      });
  }

}
