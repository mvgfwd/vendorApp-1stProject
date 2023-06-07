import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class VendorDetailService{
    editing = false;
    editingMode(){
        this.editing=true;
        localStorage.clear()
        localStorage.setItem('edit', this.editing.toString());
    }

    addingMode(){
        this.editing = false;
        localStorage.clear()
    }
}