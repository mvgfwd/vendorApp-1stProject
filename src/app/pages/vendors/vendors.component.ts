import { Component, OnInit } from '@angular/core';
import { VendorsService } from './vendors.service';
import { trigger, animate, style, state, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { VendorDetailService } from './vendor-detail/vendor-detail.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],
  animations: [
    trigger('elAnimate',[
      state('in', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('* => void',[
        animate(250, style({
          transform: 'scale(.1)',
          opacity:0
        }))
      ])
    ]),
  ]
})
export class VendorsComponent implements OnInit {
  //dummy vendors data
  constructor(private vendorSvc:VendorsService, 
              private router: Router,
              private vendorDetSvc:VendorDetailService,
              private usersSvc: UsersService){}
  dummy = this.vendorSvc.getVendors()
  ngOnInit(){
  }
  
  clg(){}

  onDelete(i:number){
    const vendorId = this.vendorSvc.getVendorId(i)
    this.vendorSvc.deleteVendorById(vendorId); 
    this.action=undefined;
    let x = i;
    if(i<1){
      x = i+2;
    }
    this.router.navigate(['vendors/'+(x-1)])

    //jika vendor didelete update ke user
    this.usersSvc.loopChkVendor(vendorId)

  }

  //form to switch vendor >< forms
  toForm(){
    this.vendorDetSvc.addingMode()
  }

  //action button
  action:any;
  onAct:any;
  kliked(){
    this.action = this.onAct;
  }

  showDetail(idx:any){
  }

}
