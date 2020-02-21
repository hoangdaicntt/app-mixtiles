import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss']
})
export class GiftComponent implements OnInit {
  pageContent: any = {
    titleCard: 'Mixtiles Gift Card',
    amount: ' Tiles',
    labelInput: 'Who is the gift for:',
    placeholderInput: 'Email',
    imageCards: 'https://www.mixtiles.com/images/giftCard/card-en.png',
    shipIconUrl: 'https://www.mixtiles.com/images/giftCard/checkIcon.svg', shipText: 'Shipping Included',
    submitButton: 'Buy', howItWork: 'How does it work?',
    contactUs: 'Any questions?<span class="contact-us-button">Contact us</span>',
    options: [
      {
        id: 'gift3',
        number: 3,
        title: '3 Tiles',
        price: 'US$33',
        selected: true,
      }, {
        id: 'gift6',
        number: 6,
        title: '6 Tiles',
        price: 'US$66'
      }, {
        id: 'gift8',
        number: 8,
        title: '8 Tiles',
        price: 'US$88'
      }, {
        id: 'gift12',
        number: 12,
        title: '12 Tiles',
        price: 'US$132'
      },
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedOption() {
    return this.pageContent.options.find(x => !!x.selected);
  }

  selectOption(item) {
    this.pageContent.options = this.pageContent.options.map(x => {
      x.selected = false;
      return x;
    });
    item.selected = !item.selected;
  }
}
