import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {SeoService} from '../../services/seo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageContent: any = null;


  constructor(private appService: AppService,
              private seoService: SeoService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.appService.getPageDetail(slug).subscribe(result => {
        this.pageContent = result;
        this.seoService.init(this.pageContent.seo);
      });
    }
  }
}
