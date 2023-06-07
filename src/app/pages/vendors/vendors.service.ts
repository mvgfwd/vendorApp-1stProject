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
        new VendorDTO(4, "PT. Jaya Selalu", 2, "jaya@selalu.co.id", "jl. Yg Lurus, Disini, GG", "0821456456"),
        new VendorDTO(5, "CV Sungai Bersih", 3, "sungai@bersih.co.id", "jl. in Aja dulu, Harapan, India", "082112335345")
    ]
    getVendors(){
        return this.vendors
    }
    getDetailVendor(idx:number){
        return this.vendors[idx];
    }

    deleteVendor(idx:any){
        this.vendors.splice(idx,1);
        this.vendorArrChanged.next(this.vendors)
    }

    addVendor(newVendor:VendorDTO){
        this.vendors.push(newVendor);
        this.vendorArrChanged.next(this.vendors)
    }

    editVendor(idx:number, editedVendor:VendorDTO){
        this.vendors[idx] = editedVendor;
        this.vendorArrChanged.next(this.vendors)
    }
}