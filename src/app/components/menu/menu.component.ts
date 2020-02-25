import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('menus') menus;
  @Input('popupTop') popupTop = null;
  @Input('image') image = null;
  @Output('actionEvent') actionEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  action(action: string) {
    this.actionEvent.emit({action});
  }
}
