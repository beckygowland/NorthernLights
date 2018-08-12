import { Component, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

 @Component({
   selector: 'landing-page',
   templateUrl: './landing.html',
  })
  export class AppComponent {
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