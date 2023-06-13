import {  Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router'
import { VendorsService } from "../vendors.service";
import { VendorDTO } from "../vendor.dto";
import { VendorDetailService } from "../vendor-detail/vendor-detail.service";
import { animate, trigger, style, state, transition } from "@angular/animations";

@Component({
    selector: 'app-vendor-form',
    templateUrl: './vendor-form.component.html',
    styleUrls: ['./vendor-form.component.css'],
    animations: [
        trigger('formAnimate', [
            state('in', style({
                transform: 'translateX(0) translateY(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    transform: 'translateX(-100px)',
                    opacity: .8,
                    zIndex:0
                }),
                animate(150)
            ]),
            //GAK WORK
            transition('* => void',[
                animate(550, style({
                    transform: 'translateX(-150px)',
                    scale: .2
                }))
            ])
        ]),
    ]
})

export class VendorFormComponent implements OnInit, OnDestroy{
    
    constructor(private router: Router,
                private vendorSvc: VendorsService,
                private vendorDetSvc: VendorDetailService,
                private route: ActivatedRoute,
                private location: Location){    }
    url:any;
    theForm:any;
    editing = this.vendorDetSvc.editing;
    editingLocalStorage:string|null = localStorage.getItem('edit');
    indeks:number = 0;

    subOrEdit(){
        const lastArr = this.vendorSvc.getVendors().length - 1;
        const newVendor = new VendorDTO(
            this.editing?this.vendorSvc.getDetailVendor(this.indeks)['id']:lastArr+2,
            this.theForm.value.name,
            this.theForm.value.total,
            this.theForm.value.email,
            this.theForm.value.address,
            this.theForm.value.phone,
            this.theForm.value.imgpath
        )
        this.router.navigate(['vendors/' + (lastArr+1)]);
        
        if(this.editing){
            this.vendorSvc.editVendor(this.indeks, newVendor)
            this.router.navigate(['../'], {relativeTo:this.route})
        }
        if(!this.editing){
            this.vendorSvc.addVendor(newVendor);
        }
    }

    backToPrevPage(){
        this.router.navigate(['../'], {relativeTo:this.route})
    }

    submitOrEdit(){

    }

    ngOnInit(): void {
        this.intializeForm();
        this.vendorDetSvc.addingMode()
        this.editing = false;
        //Menentukan Form mode edit atau tambah (meski app direstart)
        if(this.editingLocalStorage){
            this.vendorDetSvc.editingMode();
            this.editing=true;
        }
        if(this.route.snapshot.routeConfig?.path === ':id/edit'){
           this.vendorDetSvc.editingMode()
            this.editing = true;
        }
        if(this.route.snapshot.routeConfig?.path ==='add'){
            this.vendorDetSvc.addingMode();
            this.editing=false;
        }
        this.route.params.subscribe(
            (url:Params)=>{
                this.indeks = url['id']
                this.intializeForm();
            }
        )
    }

    ngOnDestroy(): void {
        console.log('DESTROY')
    }

    intializeForm(){
        const editingVendor = this.vendorSvc.getDetailVendor(this.indeks)
        let name = '';
        let address ='';
        let email = '';
        let phone = '';
        let total = 0;
        let imgpath :string|undefined='';
        
        if(this.editing){
            name = editingVendor?.name;
            address = editingVendor?.address;
            email = editingVendor?.email;
            phone = editingVendor?.phone;
            total = editingVendor?.total;
            imgpath = editingVendor?.imgPath;
            
            this.theForm = new FormGroup({
                name : new FormControl(name, Validators.required),
                address : new FormControl(address, Validators.required),
                email : new FormControl(email, [Validators.required ,Validators.email]),
                phone: new FormControl(phone),
                total: new FormControl(total, Validators.required),
                imgpath: new FormControl(imgpath),
            })
        }
        
        if(!this.editing){
            this.theForm = new FormGroup({
                name : new FormControl(null, Validators.required),
                address : new FormControl(null, Validators.required),
                email : new FormControl(null, [Validators.required ,Validators.email]),
                phone: new FormControl(null),
                total: new FormControl(null, Validators.required),
                imgpath: new FormControl(null),
            })
        }
        console.log('vendor id,', editingVendor?.id)
    }
    
    
}