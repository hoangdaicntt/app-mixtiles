/* tslint:disable:max-line-length */
import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {SeoService} from '../../../services/seo.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  pageContent: any = null;

  constructor(private appService: AppService,
              private seoService: SeoService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.appService.getNewsDetail(slug).subscribe(result => {
        this.pageContent = result;
        this.seoService.init(this.pageContent.seo);
      });
    }
  }

}
