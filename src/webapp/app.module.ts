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

import { LandingComponent } from './modules/landingModule/landing.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { RequestQuoteComponent } from './modules/contact/requestQuote/requestQuote.component';
import { SignUpComponent } from './modules/contact/signup/signUp.component';
import { ContactComponent } from './modules/contact/contact.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
    bootstrap: [ LandingComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialDesignModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        RouterModule,
        TreeModule,
        ToastrModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [ 
        LandingComponent,
        HomeComponent,
        ContactComponent, 
        SignUpComponent,
        RequestQuoteComponent,
        ProductsComponent
    ],
    entryComponents: [  ],
    providers: [  ],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}