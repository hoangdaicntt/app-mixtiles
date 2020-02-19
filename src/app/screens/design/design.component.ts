import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {trigger} from '@angular/animations';


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
  editMenuPopup = {
    show: false,
    menus: [
      {id: 'adjust', name: 'Adjust'},
      {id: 'remove', name: 'Remove', color: '#e64d00'},
      {id: 'cancel', name: 'Dismiss', color: '#8c8c8c', background: '#f2f2f2'}
    ]
  };
  selectedImage = null;
  popupEdit = {
    show: false
  };

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
      size: {width: 0, height: 0}
    };
    this.appService.upload(this.fileToUpload).subscribe((result: any) => {
      if (result.success) {
        image.path = result.path;
        image.size = result.size;
        this.images.push(image);
      }
    });
  }

  editMenuAction(event: any) {
    switch (event.action) {
      case 'remove': {
        this.images = this.images.filter(img => img !== this.selectedImage);
        this.editMenuPopup.show = false;
        break;
      }
      case 'adjust': {
        this.popupEdit.show = true;
        this.editMenuPopup.show = false;
        break;
      }
      default: {
        this.editMenuPopup.show = false;
        break;
      }
    }
  }

  selectImage(image: any) {
    this.selectedImage = image;
    this.editMenuPopup.show = true;
  }

  getSelectedImage() {
    return JSON.parse(JSON.stringify(this.selectedImage));
  }

  updateImageEdit(event: any) {
    this.selectedImage.editData = event;
  }
}
