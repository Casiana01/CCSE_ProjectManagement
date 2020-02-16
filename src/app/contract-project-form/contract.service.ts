import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContract } from './contract-project-form';


//we know that response will be in JSON format
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }


  // Uses http.get() to load data 
  getContractProjects() {
    return this.http.get('http://localhost:8000/contractprojects');
  }

  // Uses http.get() to load data 
  getContractProjectsByUser(userId) {
    return this.http.get('http://localhost:8000/contractprojects/user/' + userId);
  }

  editcontract(_id: string) {
    console.log('contract.service.editcontract - _id = ' + _id);
    return this.http.get("http://localhost:8000/contractprojects/edit/" + _id);
  }

  // Uses http.post() to post data 

  addContract(contractObj: IContract) {
    return this.http.post('http://localhost:8000/contractprojects/add', contractObj)
  }


  updateContract(_id: string, contractObj: IContract) {
    return this.http.put('http://localhost:8000/contractprojects/update/' + _id, contractObj)
  }

  deletecontract(_id: string) {
    console.log('contract.service.deletecontract - _id = ' + _id)
    this.http.delete("http://localhost:8000/contractprojects/" + _id)
      .subscribe(() => {
        console.log('Deleted: ' + _id);
      });
  }

}
