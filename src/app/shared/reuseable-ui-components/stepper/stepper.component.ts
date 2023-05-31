import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { StepperContentComponent } from './components/stepper-content/stepper-content.component';
import { StepperDirective } from './stepper.directive';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterContentInit {

  @ContentChildren(StepperContentComponent) stepper: QueryList<StepperContentComponent> | undefined;
  @ViewChild(StepperDirective) dynamicTabPlaceholder?: StepperDirective;

  @Input() buttonEnable: boolean = true;

  selectedStepper?: StepperContentComponent;
  currentIndex: number = 0;
  nextButtonStatus: boolean = true;
  prevButtonStatus: boolean = false;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    const activeTabs = this.stepper?.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs?.length === 0) {
      this.selectStepper(this.stepper?.first, 0);
    }
  }

  selectStepper(step?: StepperContentComponent, stepperIndex?: number) {
    // deactivate all steppers
    this.stepper?.toArray().forEach((stepper) => (stepper.active = false));

    // activate the stepper the user has clicked on.
    step!.active = true;
    this.currentIndex = stepperIndex!;
    this.selectedStepper = step;

    this.setNextButtonStatus();
    this.setPrevButtonStatus();
  }

  setNextButtonStatus(): void {

    const actualLength: number = this.stepper!.length - 1;

    if(this.currentIndex == actualLength) {
      this.nextButtonStatus = false;
    } else {
      this.nextButtonStatus = true;
    }

  }

  setPrevButtonStatus(): void {

    if(this.currentIndex == 0) {
      this.prevButtonStatus = false;
    } else {
      this.prevButtonStatus = true;
    }

  }

  nextStep(): void {
    this.currentIndex += 1;
    const steps: QueryList<StepperContentComponent> = this.stepper!;
    const selectedStep: StepperContentComponent = steps.filter((element, index) => index === this.currentIndex)[0];

    this.selectStepper(selectedStep, this.currentIndex);
  }

  prevStep(): void {
    this.currentIndex -= 1;
    const steps: QueryList<StepperContentComponent> = this.stepper!;
    const selectedStep: StepperContentComponent = steps.filter((element, index) => index === this.currentIndex)[0];

    this.selectStepper(selectedStep, this.currentIndex);
  }
}
