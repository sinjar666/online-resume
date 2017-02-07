import {Component, Input} from '@angular/core';

import {CarouselSlideImage} from './slideimage.interface';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styles: [
       require('./carousel.component.css')
    ]

})
export class CarouselComponent {
    
    @Input()
    public slides: CarouselSlideImage[];
}