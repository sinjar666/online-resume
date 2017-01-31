import {
  Component,
  OnInit,
  Input,
  Output
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { MnFullpageService, MnFullpageOptions } from "ng2-fullpage";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    MnFullpageService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [
    require('fullpage.js/dist/jquery.fullpage.css'),
    require('./home.component.css')
  ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  //FullPage.js configuration
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: false,
        scrollingSpeed: 700,

        menu: '.menu',
        css3: true,
        anchors: [
            'home', 'about', 'cert', 'work', 'contact'
        ]
    });

  // Set our default values
  public localState = { value: '' };
  
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private fullpageService: MnFullpageService
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
