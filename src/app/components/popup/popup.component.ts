import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output('cancelEvent') cancelEvent = new EventEmitter();
  @Output('acceptEvent') acceptEvent = new EventEmitter();
  @Input('acceptText') acceptText;
  @Input('title') title;

  constructor() {
  }

  ngOnInit() {
  }

  accept() {
    this.acceptEvent.emit();
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
