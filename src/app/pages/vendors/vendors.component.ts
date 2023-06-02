import { Component, OnInit } from '@angular/core';
import { VendorDTO } from './vendor.dto';
import { VendorsService } from './vendors.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  //dummy vendors data
  constructor(private vendorSvc:VendorsService){}
  dummy = this.vendorSvc.getVendors()
  ngOnInit(){
  }
  
  onDelete(i:any){
    this.vendorSvc.deleteVendor(i)
  }

  //form to switch vendor >< forms
  formsMode=false;
  toForm(){
    this.formsMode=true;
  }

  //action button
  action:any;
  onAct:any;
  kliked(){
    this.action = this.onAct;
  }

  showDetail(idx:any){
    console.log(idx)
  }

}
