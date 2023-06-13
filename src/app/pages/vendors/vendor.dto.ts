import { UserDTO } from "../users/user.dto";

export class VendorDTO{
    constructor(public id:number, 
                public name:string, 
                public total:number,
                public email:string,
                public address:string,
                public phone:string,
                public imgPath?:string,
                public user?:UserDTO[]){}
}