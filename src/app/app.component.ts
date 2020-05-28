import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formData = {
    sessionId: 'Mã id client sẽ sinh, dạng UUID',
    firstName: '',
    lastName: '',
    email: '',
    languageCode: environment.language
  };

  constructor(private appService: AppService) {
    localStorage.removeItem('init-data');
    environment.language = localStorage.getItem('lang') ? localStorage.getItem('lang') : environment.language;
    this.formData.languageCode = environment.language;
  }


  ngOnInit(): void {
    if (!!this.appService.getLocalData('session')) {
      environment.sessionId = !!this.appService.getLocalData('session') ? this.appService.getLocalData('session').sessionId : null;
    } else {
      this.formData.sessionId = this.appService.getRandomId();
      environment.sessionId = this.formData.sessionId;
      this.appService.saveLocalData('session', this.formData);
      this.appService.updateSession(this.formData).subscribe(result => {
      });
    }
  }
}
