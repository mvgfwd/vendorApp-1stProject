import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'

@Component({
    selector: 'app-vendor-form',
    templateUrl: './vendor-form.component.html',
    styleUrls: ['./vendor-form.component.css']
})

export class VendorFormComponent implements OnInit{

    url:any;

    constructor(private router: Router){}

    ngOnInit(): void {
        this.url = this.router.url
    }

}