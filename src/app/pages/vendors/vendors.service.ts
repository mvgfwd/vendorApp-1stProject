import { Injectable } from "@angular/core";
import { VendorDTO } from "./vendor.dto";
import { Subject } from "rxjs";

@Injectable()

export class VendorsService {
    vendorArrChanged = new Subject<VendorDTO[]>();

    vendors:VendorDTO[]=[
        new VendorDTO(1, "PT. ABCD Indonesia", 10, "abcd@indonesia.com", "jl. Batre ABC, New York, Laos", "021123123", "https://static8.depositphotos.com/1100878/959/i/600/depositphotos_9591498-stock-photo-letter-cubes-a-b-c.jpg"),
        new VendorDTO(2, "PT. XYZ Bandung", 3, "xyz@bandung.co.id", "jl. Burning Hall, Bandung, Indonesia", "0813123123", "https://cdn2.f-cdn.com/contestentries/298255/16870469/563a9c842ebb8_thumb900.jpg"),
        new VendorDTO(3, "CV Nusantara", 5, "nusantara@email.co.id", "jl. Ako Mid, Tanga, Japan", "0821123123"),
        new VendorDTO(4, "PT. Jaya Selalu", 2, "jaya@selalu.co.id", "jl. Yg Lurus, Disini, GG", "0821456456","https://i0.wp.com/onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg"),
        new VendorDTO(5, "CV Sungai Bersih", 3, "sungai@bersih.co.id", "jl. in Aja dulu, Harapan, India", "082112335345")
    ]
    getVendors(){
        return this.vendors
    }
    getDetailVendor(idx:number){
        return this.vendors[idx];
    }
    getVendorId(i:number){
        return this.vendors[i].id;
    }

    deleteVendor(idx:any){
        this.vendors.splice(idx,1);
        this.vendorArrChanged.next(this.vendors)
    }
    deleteVendorById(id:any){
        const idInIndex = this.vendors.findIndex(
            x => x.id === id
        )
        this.deleteVendor(idInIndex);
    }

    addVendor(newVendor:VendorDTO){
        this.vendors.push(newVendor);
        this.vendorArrChanged.next(this.vendors)
    }

    editVendor(idx:number, editedVendor:VendorDTO){
        this.vendors[idx] = editedVendor;
        this.vendorArrChanged.next(this.vendors)
    }

    getVendorNameById(id:number|undefined|null){
        let namaVendor:string='';
        // this.vendors.forEach(element => {
        //     if(id != undefined){
        //         if(element.id === id){
        //             namaVendor = element.name
        //         }
        //     }
        // });
        // return namaVendor;
        this.vendors.map(
            e=> {
                if(id!=undefined && e.id === id){
                    namaVendor = e.name
                }
            }
        )
        return namaVendor
    }

    getVendorImg(index:number|undefined | null){
        let url:any;
        this.vendors.forEach(element=>{
            if(index != null){
                if(element.id === index){
                    url = element.imgPath
                }
            }
        })
        return url
    }

}