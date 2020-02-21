import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  pageContent: any;
  headerMenuPopup;

  constructor(private appService: AppService,
              private router: Router) {
  }

  async ngOnInit() {
    await this.loadInit();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.register;
    this.headerMenuPopup = result.headerMenuPopup;
  }

  submit() {
    this.router.navigate(['/design']);
  }

}
