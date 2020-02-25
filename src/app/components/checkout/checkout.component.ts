import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input('dataInit') pageContent: any;
  @Output('checkoutEvent') checkoutEvent = new EventEmitter();

  addressPopupShow = false;

  constructor(private appService: AppService) {
  }

  async ngOnInit() {
  }

  checkout() {
    this.checkoutEvent.emit();
  }

  cancel() {
    this.checkoutEvent.emit(null);
  }

  applyAddress() {
    this.appService.updateAddress(this.pageContent.links.address.fields).subscribe(result => {
      this.addressPopupShow = false;
    });
  }
}
