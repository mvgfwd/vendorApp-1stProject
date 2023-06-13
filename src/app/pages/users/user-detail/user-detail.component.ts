import { Component, OnInit,Input } from "@angular/core";
import { UsersService } from "../users.service";
import { ActivatedRoute, Params } from "@angular/router";
import { VendorsService } from "../../vendors/vendors.service";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit{
    constructor(private userSvc: UsersService,
                private route: ActivatedRoute,
                private vendorsSvc: VendorsService){}

    users = this.userSvc.getUsers();

    indeks = 0;
    detailUser:any;

    vendorImg(){
        return this.userSvc.getVendorImg(this.indeks);
    }
    vendorName(){
        const user = this.userSvc.getDetailUser(this.indeks);
        const vendorIdd = user?.vendorId
        return this.userSvc.getVendorNameFromUserId(vendorIdd);
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (e:Params) => {
                this.indeks = +e['idx'];
                this.detailUser = this.userSvc.getDetailUser(this.indeks);
            }
        )
        this.vendorImg();
        this.vendorName();
    }
}