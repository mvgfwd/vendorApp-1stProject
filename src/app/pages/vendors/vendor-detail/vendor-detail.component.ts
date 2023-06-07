import { Component, OnInit, Input, Output } from "@angular/core";
import { VendorsService } from "../vendors.service";
import { ActivatedRoute, Params } from "@angular/router";
import { trigger, animate, state, style, transition } from "@angular/animations";
import { VendorDetailService } from "./vendor-detail.service";

@Component({
    selector: 'app-vendor-detail',
    templateUrl: './vendor-detail.component.html',
    styleUrls:['./vendor-detail.component.css'],
    animations: [
        trigger('detailAnimate', [
            state('in', style({
                transform: 'translateX(0) scale(1,1)',
                opacity: 1
            })),
            transition('void => *', [
                style({
                    transform: 'translateX(-160px) scale(0.3,0.3)',
                    opacity: .2
                }),
                animate(150)
            ])
        ])
    ]
})

export class VendorDetailComponent implements OnInit {
    detailVendor:any;
    indeks:number=0;
    editMode = true;
    

    //2way data binding for add vendor
    @Input() addName='';
    @Input() addAddress='';
    @Input() addEmail='';
    @Input() addPhone='';
    @Input() addTotal='';
    @Input() addImgPath='';

    constructor(private vendorSvc: VendorsService,
                private route: ActivatedRoute,
                private vendorDetSvc: VendorDetailService){}
    
    ngOnInit(): void {
        this.route.params.subscribe(
            (e:Params)=>{
                this.indeks = +e['id'],
                this.detailVendor = this.vendorSvc.getDetailVendor(this.indeks)
                // console.log( +this.route.snapshot.params['id'])
                //Enter to Add Mode
                if(isNaN(+this.route.snapshot.params['id'])){
                    this.editMode = false;
                }
            }
        )
    }

    // editedForm = this.

    editForm(){
        this.editMode = true;
        // this.vendorSvc.editVendor(this.indeks, );
        // this.vendorSvc.editVendor(this.indeks, )
    }
    

}