import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './screens/home/home.component';
import {SafePipe} from './pipes/safe.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './screens/register/register.component';
import { DesignComponent } from './screens/design/design.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    HeaderComponent,
    RegisterComponent,
    DesignComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
