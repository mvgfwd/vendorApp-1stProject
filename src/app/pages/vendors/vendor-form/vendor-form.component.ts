import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router'

@Component({
    selector: 'app-vendor-form',
    templateUrl: './vendor-form.component.html',
    styleUrls: ['./vendor-form.component.css']
})

export class VendorFormComponent implements OnInit{
    
    constructor(private router: Router){}
    url:any;
    theForm:any;

    subOrEdit(){
        console.log('form',this.theForm);
        // this.router.navigate(['vendors'])
    }


    ngOnInit(): void {
        this.theForm = new FormGroup({
            id: new FormControl(null),
            name : new FormControl(null, Validators.required),
            address : new FormControl(null),
            email : new FormControl(null, Validators.email),
            phone: new FormControl(null),
            total: new FormControl(null)
        })
    }

}