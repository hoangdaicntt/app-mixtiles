import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {ParsedProperty} from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  pageContent: any;
  headerMenuPopup;
  formData = {
    sessonId: 'Mã id client sẽ sinh, dạng UUID',
    firstName: '',
    lastName: '',
    email: '',
    languageCode: environment.language
  };

  constructor(private appService: AppService,
              private router: Router) {
  }

  async ngOnInit() {
    if (!!environment.sessionId) {
      this.formData = this.appService.getLocalData('session');
      this.router.navigate(['/design']);
    } else {
      this.formData.sessonId = this.appService.getRandomId();
      environment.sessionId = this.formData.sessonId;
    }
    await this.loadInit();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.register;
    this.headerMenuPopup = result.headerMenuPopup;
  }

  submit() {
    this.appService.saveLocalData('session', this.formData);
    this.appService.updateSession(this.formData).subscribe((result) => {
      this.router.navigate(['/design']);
    }, (error) => {
      this.router.navigate(['/design']);
    });
  }

}
