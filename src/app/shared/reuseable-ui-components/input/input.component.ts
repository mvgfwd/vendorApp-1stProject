import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  // input setting
  @Input() inputId: string = '';
  @Input() style: string = '';
  @Input() size: string = 'p-2.5';
  @Input() oninput: any;
  @Input() description: string = '';
  @Input() tooltip: string = '';
  @Input() control = new FormControl();
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;
  @Input() border: boolean = false;
  @Input() placeholder: string = '';
  @Input() inputType: 'text' | 'number' | 'date' | 'datetime' | 'checkbox'| 'password' =
    'text';
  // End of input setting

  borderData: string = ''
  focus:boolean

  // error message
  errorMessage: Record<string, string> = {
    required: 'The field is required',
    email: 'The e-mail is invalid',
    max: 'The input is exceeding maximum limit',
    min: 'The input is below minimum limit',
  };
  // End of error message

  ngOnInit(): void {
    if (this.border){
      this.borderData = '1px solid #27AE60'
    }
  }

  onFocus(){
    this.focus = true;
  }

  onBlur(){
    this.focus = false;
  }
}
