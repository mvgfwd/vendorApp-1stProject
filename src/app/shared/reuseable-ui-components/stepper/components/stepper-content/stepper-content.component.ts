import { Component, Input } from '@angular/core';
import { HeroIconName } from 'ng-heroicon';

@Component({
  selector: 'app-stepper-content[title][id][icon]',
  templateUrl: './stepper-content.component.html',
  styleUrls: ['./stepper-content.component.css']
})
export class StepperContentComponent {
  @Input() title?: string;
  @Input() id?: string;
  @Input() active: boolean = false;
  @Input() isCloseable = false;
  @Input() desc?: string;
  @Input() icon: HeroIconName = 'briefcase';
  @Input() template: any;
  @Input() dataContext: any;
}
