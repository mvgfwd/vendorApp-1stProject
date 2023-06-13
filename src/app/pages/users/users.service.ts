import { Injectable } from "@angular/core";
import { UserDTO } from "./user.dto";
import { VendorDTO } from "../vendors/vendor.dto";
import { Subject } from "rxjs";
import { VendorsService } from "../vendors/vendors.service";
import { Router } from "@angular/router";


@Injectable()

export class UsersService{
    userVendorChanged = new Subject<UserDTO[]>();

    constructor(private vendorsSvc: VendorsService,
                private router: Router){}

    users:UserDTO[] = [
        new UserDTO(1, "Alfa", "1999-01-16" , "al@fa.com", "Admin", 1,undefined,"https://static01.nyt.com/images/2022/10/21/multimedia/21rory-ronaldo4-1-ea5c/21rory-ronaldo4-1-ea5c-superJumbo.jpg"),
        new UserDTO(2, "Bravo","1999-8-8", "br@vo.com", "Bartender", 3),
        new UserDTO(3, "Charlie", "1998-6-6","ch@rlie.com", "Chef", 4, undefined, "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2019/01/menurut-hanafi-rais-harusnya-luhut-yang-minta-maaf-ke-amien_m_197770.jpeg"),
        new UserDTO(5, "Delta", "1998-5-5","delt@a.com", "Instruktur", 4, undefined ,"https://cdn.antaranews.com/cache/800x533/2017/12/20171229antarafoto-usa-trump2-firerescuesquads-28122017.jpg"),
    ]

    getUsers(){
        return this.users;
    }

    getDetailUser(indeks:number){
        return this.users[indeks];
    }

    getUserId(index:number){
        return this.users[index].id;
    }
    findUserIndex(id:any){
        return this.users.findIndex(id)
    }

    getVendorNameFromUserId(id:number){
        return this.vendorsSvc.getVendorNameById(id);
    }

    getVendorImg(index:number){
        const karyawan = this.getDetailUser(index);
        const vendorId = karyawan?.vendorId;
        let imgUrl:any;
        if(vendorId){
            imgUrl = this.vendorsSvc.getVendorImg(vendorId);
        }
        return imgUrl;
    }

    //if vendor removed
    loopChkVendor(id:any){
        this.users.forEach(
            (e)=>{
                if(e.vendorId === id){
                    console.log(e.email)
                }
            }
        )
    }

    deleteUserById(index:any){
        const idxNum = this.users.map(e=>e.id).indexOf(index);
        //menghapus dan update
        this.users.splice(idxNum, 1)
        this.userVendorChanged.next(this.users);
        //navigate
        this.router.navigate(['users'])
    }

    addUser(user:UserDTO){
        this.users.push(user);
        this.userVendorChanged.next(this.users)
    }

}