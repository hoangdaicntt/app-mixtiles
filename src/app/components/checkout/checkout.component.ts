import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input('dataInit') pageContent: any;
  @Output('checkoutEvent') checkoutEvent = new EventEmitter();

  addressPopupShow = false;

  constructor() {
  }

  ngOnInit() {
  }

  checkout() {
    this.checkoutEvent.emit();
  }

  cancel() {
    this.checkoutEvent.emit(null);
  }

}
