import { Injectable } from "@angular/core";
import { VendorDTO } from "./vendor.dto";
import { Subject } from "rxjs";

@Injectable()

export class VendorsService {
    vendorArrChanged = new Subject<VendorDTO[]>();

    vendors:VendorDTO[]=[
        new VendorDTO(1, "PT. ABCD Indonesia", 10, "abcd@indonesia.com", "jl. Batre ABC, New York, Laos", "021123123"),
        new VendorDTO(2, "PT. XYZ Bandung", 3, "xyz@bandung.co.id", "jl. Burning Hall, Bandung, Indonesia", "0813123123"),
        new VendorDTO(3, "CV Nusantara", 5, "nusantara@email.co.id", "jl. Ako Mid, Tanga, Japan", "0821123123")
    ]
    getVendors(){
        return this.vendors
    }
    getVendor(idx:number){
        return this.vendors[idx];
    }

    deleteVendor(idx:any){
        this.vendors.splice(idx,1);
        this.vendorArrChanged.next(this.vendors)
    }
}