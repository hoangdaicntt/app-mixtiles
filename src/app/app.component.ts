import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
  }


  ngOnInit(): void {
    if (!!this.appService.getLocalData('session')) {
      environment.sessionId = this.appService.getLocalData('session').sessionId;
    }
  }
}
