import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pageContent;
  currentLanguage: string;

  constructor(private appService: AppService) {
  }

  async ngOnInit() {
    this.currentLanguage = environment.language;

    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.home;
  }

}
