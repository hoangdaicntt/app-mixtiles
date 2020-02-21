import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import Swiper from 'swiper';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../../node_modules/swiper/css/swiper.css']
})
export class HomeComponent implements OnInit {
  pageContent;
  private swiper: Swiper;
  currentLanguage = null;

  constructor(private appService: AppService) {
  }

  async ngOnInit() {
    await this.loadInit();
    this.initSlider();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    console.log(result);
    this.pageContent = result.home;
    console.log(result);
  }

  initSlider() {
    setTimeout(() => {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }, 100);
  }
}
