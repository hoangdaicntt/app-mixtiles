import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  pageContent: any;
  styleCodeSelected = 'clean';
  fileToUpload: File = null;
  images = [];

  constructor(private appService: AppService) {
  }

  async ngOnInit() {
    await this.loadInit();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.design;
  }

  imageFrame() {
    const style = this.pageContent.styles.find(x => x.code === this.styleCodeSelected);
    console.log(style);
    return !!style ? style : null;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.upload();
  }

  upload() {
    const image = {
      id: '',
      name: '',
      path: '',
    };
    this.images.push(image);
    this.appService.upload(this.fileToUpload).subscribe((result: any) => {
      if (result.success) {
        image.path = result.path;
      }
    });
  }
}
