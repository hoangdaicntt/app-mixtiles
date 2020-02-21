import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './screens/home/home.component';
import {SafePipe} from './pipes/safe.pipe';
import {HeaderComponent} from './components/header/header.component';
import {RegisterComponent} from './screens/register/register.component';
import {DesignComponent} from './screens/design/design.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './components/menu/menu.component';
import {PopupComponent} from './components/popup/popup.component';
import {ZoomComponent} from './components/zoom/zoom.component';
import { ImageComponent } from './components/image/image.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GiftComponent } from './screens/gift/gift.component';
import { NewsListComponent } from './screens/news/news-list/news-list.component';
import { NewsDetailComponent } from './screens/news/news-detail/news-detail.component';
import { PageComponent } from './screens/page/page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    HeaderComponent,
    RegisterComponent,
    DesignComponent,
    MenuComponent,
    PopupComponent,
    ZoomComponent,
    ImageComponent,
    CheckoutComponent,
    GiftComponent,
    NewsListComponent,
    NewsDetailComponent,
    PageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
