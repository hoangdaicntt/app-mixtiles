import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {SeoService} from '../../../services/seo.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  pageContent: any = null;

  constructor(private appService: AppService,
              private seoService: SeoService) {
  }

  ngOnInit() {
    const url = new URL(location.href);
    const page: any = !!url.searchParams.get('page') ? url.searchParams.get('page') : 0;
    this.appService.getNews(page).subscribe(result => {
      this.pageContent = result;
      console.log(this.pageContent);
      this.seoService.init(this.pageContent.seo);
    });
  }

}
