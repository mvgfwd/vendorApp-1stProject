import { Component } from "@angular/core";
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    animations: [
        trigger('showHide', [
            state('in', style({
                opacity:1,
                transform: 'translateX(0)',
            })),
            transition('void => *',[
                style({
                    transform: 'translateX(100px)',
                    opacity: 0,
                }),
                animate(150)
            ]),
            transition('* => void', [
                animate(200, style({
                    transform: 'translateX(100px)',
                    opacity:0
                }))
            ])
        ]),
        trigger('showHide2', [
            state('in', style({
                opacity:1,
                transform: 'translateX(0)',
            })),
            transition('void => *',[
                style({
                    transform: 'translateX(-100px)',
                    opacity: 0
                }),
                animate(200)
            ]),
            transition('* => void', [
                animate(150, style({
                    transform: 'translateX(-100px)',
                    opacity:0
                }))
            ])
        ]),
        trigger('showHide3', [
            state('in', style({
                opacity:1,
                transform: 'translateX(0)',
            })),
            transition('void => *',[
                style({
                    transform: 'translateX(-100px)',
                    opacity: 0
                }),
                animate('0.3s 30ms')
            ]),
            transition('* => void', [
                animate(150, style({
                    transform: 'translateX(-100px)',
                    opacity:0
                }))
            ])
        ])
    ]
})

export class SidebarComponent {
    sidebarExtend = false;
    heroiconSolid = true;
    

    onMouseEnter(){
        this.sidebarExtend = true;
        this.heroiconSolid = false;
    }
    onMouseLeave(){
        this.sidebarExtend = false;
        this.heroiconSolid = true;
    }
}