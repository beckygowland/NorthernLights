import { Component, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

 @Component({
   selector: 'landing-page',
   templateUrl: './landing.html',
   styleUrls: ['../../app.scss'],
   encapsulation: ViewEncapsulation.None,
  })
  export class LandingComponent {
    language = 'en';

    constructor(private translate: TranslateService, private elementRef: ElementRef){
      
      translate.setDefaultLang(this.language);
    }

    changeLanguage(lang: string): void {
      if (this.language !== lang) {
        this.language = lang;
        this.translate.use(lang);
      }
    }

}