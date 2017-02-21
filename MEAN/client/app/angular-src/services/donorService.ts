import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {Http} from 'angular2/http';
import {Donor} from './angular-src/models/donor';

@Injectable()
export class DonorService{
     _url = "http://jsonplaceholder.typicode.com/users/";

    constructor( private _http: Http){}

    
    createDonor(user){
        console.log(user);
       return this._http.post(this._url, JSON.stringify(user)) 
                 .map(response => response.json());
    }

}