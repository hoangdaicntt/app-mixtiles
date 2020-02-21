import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input('linkBack') linkBack = null;
  @Input('menus') menus;
  @Input('isHeaderWeb') isHeaderWeb = false;
  @Output('acceptMenuEvent') acceptMenuEvent = new EventEmitter();

  pageContent;
  showMenuHead = false;
  showQuestionPopup = false;
  showPromotionPopup = false;
  promotionCode: string;

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
    if (this.linkBack !== null) {
      this.router.navigate([this.linkBack]);
    } else {
      this.location.back();
    }
  }

  acceptMenu(menu: any) {
    this.actionMenu(menu);
    this.acceptMenuEvent.emit(menu);
    this.showMenuHead = false;
  }

  actionMenu(menu) {
    switch (menu.id) {
      case 'questions': {
        this.showQuestionPopup = true;
        break;
      }
      case 'promotion': {
        this.showPromotionPopup = true;
        break;
      }
      case 'gift': {
        this.router.navigate(['gift']);
        break;
      }
    }
  }
}
