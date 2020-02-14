import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') title;
  @Input('linkBack') linkBack;

  pageContent: any;

  constructor(private appService: AppService,
              private location: Location,
              private router: Router) {
  }

  async ngOnInit() {
    await this.loadInit();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.header;
  }

  goBack() {
    if (this.linkBack) {
      this.router.navigate([this.linkBack]);
    } else {
      this.location.back();
    }
  }
}
