import {Component,OnInit} from '@angular/core';
import  {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {CanDeactivate, RouteParams,Router} from 'angular2/router';
import  {DonorValidators} from 'app/angular-src/validators/donorValidator';

import {DonorService} from 'app/angular-src/services/donorService';
import {Donor} from 'app/angular-src/models/donor';


@Component({
    selector:'donate',
    templateUrl: 'app/angular-src/html/donor.component.html',
    providers: [DonorService]
})
export class DonorComponent implements CanDeactivate, OnInit { 
    form: ControlGroup;
    donor = new Donor();
    title: string;

    constructor(fb: FormBuilder, 
                private _router : Router, 
                private _routeParams: RouteParams,
                private _donorService: DonorService)
    {  
        this.form = fb.group({ 
            name: ['', Validators.compose([Validators.required, Validators.minLength])],  
            email: ['', DonorValidators.validateEmail], 
           // name: [''],
           // email: [''],
            phone: [''],
            address: [''],
            product: fb.group({ 
                tittle: [''], 
                description: [''],
                category: [''],
                image: ['']
            }) 
        });   
    }

    ngOnInit(){
        this.title = "Donation Page";
    }
    onSave(){
        var result;
        console.log(JSON.stringify(this.donor));
            result= this._donorService
             .createDonor(this.donor);

        result.subscribe(res => {
                 this.form.markAsDirty(false);
                 this._router.navigate(['Home']);
              
            });
        
    }

    routerCanDeactivate(next, prev){
       if(this.form.dirty)
            return confirm("Are you sure you want to navigate away?");

        return true;
        

    }
    

}