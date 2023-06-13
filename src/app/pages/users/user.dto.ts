import { Injectable, OnInit } from "@angular/core";
import { VendorDTO } from "../vendors/vendor.dto";
import { VendorsService } from "../vendors/vendors.service";

export class UserDTO{
    //dari vendor 
    
    constructor(public id:number,
        public name:string,
        public birth:string,
        public email:string,
        public role:string,
        public vendorId:number,
        public phone?:string,
        public url?:string
                ){}

        
        
}