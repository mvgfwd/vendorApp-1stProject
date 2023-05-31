import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectionDTO } from './interface/selection.dto';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() size: string = 'p-2.5';
  @Input() validator: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() control = new FormControl();
  @Input() dropdowns: SelectionDTO[] = [];
  @Output() selectedDropdown = new EventEmitter<SelectionDTO>();

  selectedTitle?: SelectionDTO;
  selected?: SelectionDTO;

  onSelect(title: any): void {
    this.selectedDropdown.emit(this.selected);
  }

  ngOnInit(): void {
  }

}
