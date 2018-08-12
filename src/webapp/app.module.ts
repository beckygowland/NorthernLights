import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from './materialDesign.module';
import { TreeModule } from 'angular-tree-component';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './modules/landingModule/landing.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialDesignModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        TreeModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [ AppComponent ],
    entryComponents: [  ],
    providers: [  ],
})
export class AppModule {
}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    
    return new TranslateHttpLoader(http);
}