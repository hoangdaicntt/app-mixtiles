import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {RegisterComponent} from './screens/register/register.component';
import {DesignComponent} from './screens/design/design.component';
import {GiftComponent} from './screens/gift/gift.component';
import {NewsListComponent} from './screens/news/news-list/news-list.component';
import {NewsDetailComponent} from './screens/news/news-detail/news-detail.component';
import {PageComponent} from './screens/page/page.component';
import {ShareComponent} from './components/share/share.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'getstarted', component: RegisterComponent},
  {path: 'design', component: DesignComponent},
  {path: 'gift', component: GiftComponent},
  {path: 'news', component: NewsListComponent},
  {path: 'news-detail/:slug', component: NewsDetailComponent},
  {path: 'page/:slug', component: PageComponent},
  {path: 'r/:slug', component: ShareComponent}, // tạo ảnh từ thư viện cũ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
