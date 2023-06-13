import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsersService } from './users.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { VendorsService } from '../vendors/vendors.service';
import { UserDTO } from './user.dto';
import { ActivatedRoute,Params, Router, Event } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
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
export class UsersComponent implements OnInit {

  constructor(private userSvc: UsersService, private vendorSvc:VendorsService,
              private router:Router,){}
  indeks:any;
  users:any;
  //get user & vendor Name
  vendorNameById(idVendor:any){
    return this.userSvc.getVendorNameFromUserId(idVendor)
  }
  vendorName(){
    return this.userSvc.getVendorNameFromUserId(this.indeks)
  }

  getInfo(id:any){
  }

  ngOnInit(): void {
    this.users = this.userSvc.getUsers()
    console.log(this.users.length)
    for(let i = 0; i < this.users.length; i++){

    } 
    this.vendorNameById(this.users.vendorId);
  }


  deleteUserById(i:any){
    this.userSvc.deleteUserById(i);
  }
  //action click
  action:any;
  iAct:any;
  actKlik(){
    this.action = this.iAct;
  }

  //ngetes aja
  clg(){
    console.log('clg',this.userSvc.getVendorNameFromUserId(4))
  }

  toggleAct(){
    this.action = !this.action
  }
}
