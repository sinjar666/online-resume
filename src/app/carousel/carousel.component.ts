import {Component, Input} from '@angular/core';

import {SlideImage} from './slideimage.interface';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.template.html',
    styles: [
       require('./carousel.component.css')
    ]

})
export class CarouselComponent {
    
    @Input()
    public slides: SlideImage[];
}