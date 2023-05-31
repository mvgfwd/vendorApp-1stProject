import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showModal=false;
  modalOn(){
    this.showModal = true;
    console.log('modal pressed')
  }
}
