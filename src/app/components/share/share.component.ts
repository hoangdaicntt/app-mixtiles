import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initSlug();
  }

  async initSlug() {
    const slug = this.route.snapshot.params.slug;
    if (!!slug) {
      let data = '';
      const dataLocal = localStorage.getItem('data' + slug);
      if (!dataLocal) {
        const result = await this.appService.getShare(slug).toPromise().catch(err => null);
        if (result && result.success) {
          data = JSON.stringify(result.data);
          localStorage.setItem('data' + slug, data);
        }
      } else {
        data = dataLocal;
      }
      if (data) {
        localStorage.setItem('images', data);
      }
      this.router.navigate(['/design']);
    }
  }

  // async openShare() {
  //   if (confirm('Bạn có muốn tạo link số ảnh này không?')) {
  //     const slug = prompt('Nhập tên cuối liên kết:', '');
  //     const localData = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : null;
  //     const result = await this.appService.postShare(slug, localData).toPromise().catch(err => null);
  //     const link = 'https://decor22.vn/r/' + slug;
  //     prompt('Gửi liên kết này tới mọi người:', link);
  //   }
  // }
}
