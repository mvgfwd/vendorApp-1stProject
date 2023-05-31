import { Component,EventEmitter,Input, Output } from "@angular/core";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent{
    @Input() message:string='';
    @Input() title:string='';
    @Output() close = new EventEmitter<void>();

    closeModal(){
        this.close.emit()
    }
}