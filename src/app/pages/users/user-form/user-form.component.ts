import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserDTO } from "../user.dto";
import { UsersService } from "../users.service";
import { VendorsService } from "../../vendors/vendors.service";
import { Router } from "@angular/router";


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit{

    userForm:any;

    ngOnInit(): void {
        this.initForm();
    }

    constructor(private userSvc:UsersService,
                private router:Router,
                private vendorsSvc:VendorsService){}

    initForm(){
        this.userForm = new FormGroup({
            username: new FormControl('', Validators.required),
            address: new FormControl(''),
            birth: new FormControl(''),
            vendorId: new FormControl(null),
            role: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            imgUrl: new FormControl('')
        })
    }

    console(){
        console.log(this.userForm.value.username)
        console.log(this.userForm)

        //adding to data in service
        const lastArr = this.userSvc.getUsers().length - 1; //memberi id
        const user = new UserDTO(
            lastArr*2+1,
            this.userForm.value.username,
            this.userForm.value.birth,
            this.userForm.value.email,
            this.userForm.value.role,
            +this.userForm.value.vendorId,
            this.userForm.value.phone,
            this.userForm.value.url
        )
        console.log(this.userForm.value.vendorId, typeof +this.userForm.value.vendorId)
        this.userSvc.addUser(user);
        this.router.navigate(['users'])
    }
    
    //vendor id info modal
    toggle=false;
    vendors= this.vendorsSvc.vendors
    modalMsg=`${this.vendors.map(
        e=>{
            const vendorName=e.name;
            const vendorId=e.id;
            const gabungan:any[] = [' ',vendorId,[': '],vendorName,]
            return gabungan.join('')
        }
    )}`
    toggleVendorModal(){
        this.toggle = true;
        console.log(this.modalMsg)
    }
}