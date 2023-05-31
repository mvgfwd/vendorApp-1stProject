import { VendorDTO } from "../vendors/vendor.dto";

export class UserDTO{
    constructor(public id:number,
                public name:string,
                public email:string,
                public role:string,
                public vendor:VendorDTO,
                ){}
}