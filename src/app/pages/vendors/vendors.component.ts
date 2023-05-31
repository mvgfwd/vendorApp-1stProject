import { Component } from '@angular/core';
import { VendorDTO } from './vendor.dto';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  //dummy vendors data
  dummy: VendorDTO[] = [
    new VendorDTO(1, "PT. ABCD Indonesia", 10),
    new VendorDTO(2, "PT. XYZ Bandung", 3),
    new VendorDTO(3, "CV Nusantara", 5)
  ]

  onDelete(i:any){
    console.log('Delete Pressed>',i)
  }
}
