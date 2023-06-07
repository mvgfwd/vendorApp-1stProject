import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit{

    @Input() size: 'small' | 'medium' | 'large' | 'full'  | undefined = 'medium';
    @Input() color: 'primary' | 'secondary' | 'warning' | 'error' | 'outline' | undefined = 'outline';
    @Input() disableCond: boolean = false;
    @Input() round: 'small' | 'medium' | 'large' | 'extra' | 'full' | 'extra-large' | undefined = 'full';
    @Input() type:string='';

    //CSS Class
    sizeClass:string='';
    heroContainer:string='';
    heroStyle:string='';
    colorClass:string='';
    roundClass:string='';

    setRound(): void{
        switch(this.round){
          case 'small' : {
            this.roundClass = " rounded-sm "
            break
          }
          case 'medium' : {
            this.roundClass = " rounded-md "
            break
          }
          case 'large' : {
            this.roundClass = " rounded-lg "
            break
          }
          case 'extra-large' : {
            this.roundClass = " rounded-2xl "
            break
          }
          case 'full' : {
            this.roundClass = " rounded-full "
            break
          }
        }
      }

    setSize(): void{
        switch(this.size){
          case 'medium' : {
              this.sizeClass = " px-3 h-8 py-2 text-sm w-auto ";
              // this.heroContainer = " mr-2 h-4 w-4 ";
            break
          }
          case 'large' : {
            this.sizeClass = " px-8 h-12 text-lg font-semibold w-auto ";
            // this.heroContainer = " mr-4 h-6 w-6 ";
            break
          }
          case 'full' : {
            this.sizeClass = " text-lg font-bold w-full px-4 py-2 "
            // this.heroContainer = " mr-2 h-5 font-bold w-5 ";
            break
          }
          case 'small' : {
            this.sizeClass = " px-2 h-6 py-2 text-xs w-auto "
            // this.heroContainer = "mr-2 h-3 w-3 ";
            break
          }
        }
      }

      setColor(): void {
        switch(this.color) {
          case 'primary': {
            this.colorClass = "bg-ven-green-600 hover:bg-ven-green-700 hover:text-white ";
            this.heroStyle = " text-white hover:font-medium"
            break;
          }
          case 'secondary': {
            this.colorClass = " bg-ven-blue-300  hover:bg-ven-blue-400 hover:text-white ";
            this.heroStyle = " text-white "
            break;
          }
          case 'warning': {
            this.colorClass = " bg-yellow-400 font-jakarta hover:text-white hover:bg-yellow-500 ";
            this.heroStyle = " text-black "
            break;
          }
          case 'error': {
            this.colorClass = " bg-red-600 hover:bg-red-800";
            this.heroStyle = " text-white "
            break;
          }
          case 'outline': {
            this.colorClass = "bg-white outlineButt hover:border-ven-blue-300 hover:text-ven-blue-300 hover:bg-ven-blue-50 p-[-3px]";
            break;
          }
          default: {
            this.colorClass = " bg-tms-blue-500 text-white hover:bg-tms-blue-600 text-tms-neutral-50 ";
            this.heroStyle = " text-neutral-50 "
            break;
          }
        }
      }

      ngOnInit(): void {
          this.setColor();
          this.setSize();
          this.setRound()
      }
}