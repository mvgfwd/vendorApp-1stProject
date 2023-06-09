import { Component, Input } from "@angular/core";
import { FormControl } from '@angular/forms';
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
    selector:'app-input[idInput]',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    animations: [
        trigger('labelMove', [
            state('overInput', style({
                width: 'fit-content',
                fontSize: '14px',
            })),
            state('onInput', style({
                transform: 'translateY(8px) translateX(8px)',
                backgroundColor: '#0A7894',
                fontSize: '15px',
                color: 'white',
                width: 'fit-content',
                padding: ' 0 8px ',
                borderRadius: '3px',
            })),
            transition('overInput => onInput', animate(200)),
            transition('onInput => overInput', animate(200))
        ])
    ]
})

export class InputComponent {
    @Input() label:string ='Label';
    @Input() inputType: 'text' | 'number' | 'date' | 'datetime' | 'checkbox'| 'password' =
    'text';
    @Input() idInput:string ='';
    @Input() control = new FormControl();
    @Input() invalidTerm:boolean = false;
    @Input() invalidMessage:string = '';
    
    labelState = 'onInput';
    inputNumClass = 'inputTypeNumber'
    
    //menghitung length input value untuk animasi input
    inputValue:any;
    inputValLen(e:Event){
        this.inputValue = (<HTMLInputElement>e.target).value.length;
    }

    //class untuk ngClass;
    focusOrNoClass:string = '';

    onFocus(){
        this.focusOrNoClass = 'bg-white outline-0'
        this.labelState = 'overInput';
    }
    onBlur(){
        if(this.inputValue <= 0 || typeof this.inputValue === 'undefined' ? true : false){
            this.labelState = 'onInput'
            this.focusOrNoClass ='bg-gray-100 outline-0'
        }
        if(this.inputValue > 0 ){
            this.labelState = 'overInput'
            this.focusOrNoClass ='bg-white outline-0'
        }
    }

}