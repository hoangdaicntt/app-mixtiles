import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input('images') images: any;
  @Input('imageFrame') imageFrame: any;
  @Input('dataInit') pageContent: any;
  @Output('checkoutEvent') checkoutEvent = new EventEmitter();
  checkOutInfo: any = {};
  province: any = {
    districts: [],
    districtsView: [],
    wardsView: [],
    wards: [],
  };
  addressPopupShow = false;
  processing = false;
  screenConfirm = false;
  resultOrder = false;
  today = new Date();
  orderSuccess = false;
  initCheckOut = environment.language === 'vn' ? {
    subTitle: 'Thông tin giao hàng',
    require: 'Trường này là bắt buộc nhập',
    freeShip: '(*) Đơn hàng với 4 khung ảnh trở lên sẽ được freeship.',
    process: 'Đang xử lý...',
    plsChoose: 'Vui lòng chọn một ảnh trước',
    acceptOrder: 'Xác nhận đơn hàng',
    addressShip: 'Địa chỉ giao hàng',
    orderSuccess: 'Đặt hàng thành công',
    thanks: 'Cảm ơn bạn đã đặt hàng, đơn hàng của bạn đã được nhận.',
    orderCode: 'Mã đơn hàng',
    orderDate: 'Ngày đơn hàng',
    totalMoney: 'Tổng tiền',
    paymentMethod: 'Hình thức thanh toán',
    paymentMethodInfo: 'Thanh toán khi nhận hàng',
    orderDetail: 'Thanh toán khi nhận hàng',
    addressRec: 'Địa chỉ nhận hàng',
    goHome: 'Về trang chủ'
  } : {
    subTitle: 'Shipping information',
    require: 'This field is required',
    freeShip: '(*) Orders with 4 or more frames will be freeship.',
    process: 'Processing ...',
    plsChoose: 'Please select an image first',
    acceptOrder: 'Confirm order',
    addressShip: 'Shipping address',
    orderSuccess: 'Order successful',
    thanks: 'Thank you for your order, your order has been received.',
    orderCode: 'Order code',
    orderDate: 'Order date',
    totalMoney: 'Total money',
    paymentMethod: 'Payment method',
    paymentMethodInfo: 'Payment on delivery',
    orderDetail: 'Pay on delivery',
    addressRec: 'Shipping Address',
    goHome: 'Back to the home page'
  };

  constructor(private appService: AppService, private router: Router) {
    this.screenConfirm = false;
  }

  async ngOnInit() {
    this.appService.getProvince().subscribe(res => {
      this.province = res;
      const city = this.pageContent.links.address.fields.find(x => x.id === 'province');
      if (city && city.value) {
        this.getDistrict(city.value);
      }
      const district = this.pageContent.links.address.fields.find(x => x.id === 'district');
      if (district && district.value) {
        this.getWard(district.value);
      }
    });
    this.getCheckoutInfo();

  }

  async checkout() {
    const check = this.pageContent.links.address.fields.filter(x => (!!x.required && !x.value));
    if (!!check && check.length > 0) {
      for (let i = 0; i < check.length; i++) {
        check[i].showRequired = true;
        setTimeout(() => {
          check[i].showRequired = false;
        }, 3000);
      }
      return;
    }

    const addressData = this.pageContent.links.address.fields.map(x => {
      return {id: x.id, value: x.value};
    });
    this.processing = true;
    await this.appService.updateAddress(addressData).toPromise();
    const checkoutData = {
      imageData: this.images.map(item => {
        return {
          imageId: item.id,
          cropData: btoa(JSON.stringify(item.editData ? item.editData : this.viewDefault(item))),
          frame: this.imageFrame.code,
          edited: !!item.editData
        };
      }),
      clientTime: new Date().getTime()
    };
    const resultCheckout: any = await this.appService.checkout(checkoutData).toPromise();
    this.processing = false;
    this.screenConfirm = true;
    this.resultOrder = true;
    localStorage.clear();
  }

  cancel() {
    if (this.resultOrder) {
      this.goHome();
      return false;
    }
    this.checkoutEvent.emit(null);
  }

  applyAddress() {
    this.appService.updateAddress(this.pageContent.links.address.fields).subscribe(result => {
      this.addressPopupShow = false;
    });
  }

  private viewDefault(image) {
    const result: any = {
      zoom: 100,
      width: 284,
      height: 284,
      left: 0,
      top: 0
    };
    const imageFrameSize = {fullCurrent: 284};
    // default fill
    if (image.size.width > image.size.height) {
      const currentHeight = image.size.height * imageFrameSize.fullCurrent / image.size.width;
      result.zoom = imageFrameSize.fullCurrent / currentHeight * 100;
      const newWidth = imageFrameSize.fullCurrent * image.size.width / image.size.height;
      result.left = -(newWidth - imageFrameSize.fullCurrent) / 2;
      result.width = newWidth;
      result.height = imageFrameSize.fullCurrent;
    }
    if (image.size.width < image.size.height) {
      const currentWidth = image.size.width * imageFrameSize.fullCurrent / image.size.height;
      result.zoom = imageFrameSize.fullCurrent / currentWidth * 100;
      const newHeight = imageFrameSize.fullCurrent * image.size.height / image.size.width;
      result.top = -(newHeight - imageFrameSize.fullCurrent) / 2;
      result.height = newHeight;
      result.width = imageFrameSize.fullCurrent;
    }
    return {
      height: parseInt(result.height, 10),
      width: parseInt(result.width, 10),
      left: parseInt(result.left, 10),
      top: parseInt(result.top, 10),
      minZoom: 100,
      currentSize: imageFrameSize.fullCurrent
    };
  }

  getCheckoutInfo() {
    const ids = this.images.map(x => x.id);
    this.appService.getCheckoutInfo(ids).subscribe(result => {
      this.checkOutInfo = result;
    });
  }

  getDistrict(value: any) {
    this.province.districtsView = this.province.districts.filter(x => x.ProvinceId.toString() === value.toString());
  }

  getWard(value: any) {
    this.province.wardsView = this.province.wards.filter(x => x.DistrictId.toString() === value.toString());
  }

  nextStep() {
    const check = this.pageContent.links.address.fields.filter(x => (!!x.required && !x.value));
    if (!!check && check.length > 0) {
      for (let i = 0; i < check.length; i++) {
        check[i].showRequired = true;
        setTimeout(() => {
          check[i].showRequired = false;
        }, 3000);
      }
      return;
    }
    this.screenConfirm = true;
  }

  goHome() {
    const lang = localStorage.getItem('lang');
    localStorage.clear();
    localStorage.setItem('lang', lang);
    // this.router.navigate(['/']);
    location.href = location.origin;
  }

  getPrice() {
    return parseInt(this.checkOutInfo.price.replace(',', ''), 10) * this.images.length;
  }
}
