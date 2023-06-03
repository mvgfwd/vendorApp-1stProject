import { OnChanges, Component, OnInit } from "@angular/core";
import { VendorsService } from "../vendors.service";
import { VendorDTO } from "../vendor.dto";
import { ActivatedRoute, Params } from "@angular/router";
import { trigger, animate, state, style, transition } from "@angular/animations";

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
                    transform: 'translateX(-150px) scale(0.3,0.3)',
                    opacity: .2
                }),
                animate(150)
            ])
        ])
    ]
})

export class VendorDetailComponent implements OnInit ,OnChanges{
    detailVendor:any;
    indeks:number=0;

    constructor(private vendorSvc: VendorsService,
                private route: ActivatedRoute,){}
    
    ngOnInit(): void {
        this.route.params.subscribe(
            (e:Params)=>{
                this.indeks = +e['id'],
                this.detailVendor = this.vendorSvc.getDetailVendor(this.indeks)
            }
        )
    }
    
    ngOnChanges(): void {
        console.log('onChanges detail', this.indeks, this.detailVendor)
        
    }


}