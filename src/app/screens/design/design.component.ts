import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';
import {trigger} from '@angular/animations';
import {Observable} from 'rxjs';


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
  editMenuPopup;
  headerMenuPopup;
  checkoutPopup;

  selectedImage = null;
  popupEdit = {
    show: false
  };
  lowQualityMenuPopup: any;

  constructor(private appService: AppService) {
  }

  async ngOnInit() {
    this.restoreImagesFromLocal();
    await this.loadInit();
  }

  async loadInit() {
    const result: any = await this.appService.init().toPromise();
    this.pageContent = result.design;
    this.editMenuPopup = this.pageContent.editMenuPopup;
    this.lowQualityMenuPopup = this.pageContent.lowQualityMenuPopup;
    this.headerMenuPopup = result.headerMenuPopup;
    this.checkoutPopup = this.pageContent.checkoutPopup;
    if (!this.styleCodeSelected && !!this.pageContent) {
      this.styleCodeSelected = this.pageContent.styles[0].code;
    }
  }

  imageFrame() {
    const style = this.pageContent.styles.find(x => x.code === this.styleCodeSelected);
    return !!style ? style : null;
  }

  handleFileInput(files: FileList) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.upload(files.item(i), i);
      }
    }
  }

  async upload(fileToUpload, delay) {
    let image = {
      id: '',
      name: '',
      path: '',
      help: false,
      size: {width: 0, height: 0}
    };
    this.images.push(image);
    const uploadOB: Observable<any> = this.appService.upload(fileToUpload);
    setTimeout(() => {
      uploadOB.subscribe(result => {
        if (result && result.success) {
          image.id = result.id;
          image.path = result.path;
          image.size = result.size;

          // check size
          if (image.size.width < this.lowQualityMenuPopup.minWidth
            || image.size.height < this.lowQualityMenuPopup.minHeight) {
            this.lowQualityMenuPopup.image = image;
            this.lowQualityMenuPopup.show = true;
            this.selectedImage = image;
          } else {
            image = this.showHelp(image);
          }
          this.updateImagesToLocal();
        }
      });
    }, delay * 1000);
  }

  showHelp(image) {
    image.help = true;
    setTimeout(() => {
      image.help = false;
      this.updateImagesToLocal();
    }, 5000);
    return image;
  }

  editMenuAction(event: any) {
    switch (event.action) {
      case 'remove': {
        this.appService.deleteImage(this.selectedImage.id).subscribe(res => {
        });
        this.images = this.images.filter(img => img !== this.selectedImage);
        this.updateImagesToLocal();
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
    this.updateImagesToLocal();
  }

  openCheckout() {
    console.log(this.images);
    this.checkoutPopup.show = true;
  }

  checkoutAction(event: any) {
    this.checkoutPopup.show = false;
  }

  lowQualityMenuAction(event: any) {
    switch (event.action) {
      case 'remove': {
        this.images = this.images.filter(img => img !== this.selectedImage);
        this.lowQualityMenuPopup.show = false;
        this.updateImagesToLocal();
        break;
      }
      default: {
        this.lowQualityMenuPopup.show = false;
        this.selectedImage = this.showHelp(this.selectedImage);
        break;
      }
    }
  }

  updateImagesToLocal() {
    this.appService.saveLocalData('images', this.images);
  }

  restoreImagesFromLocal() {
    this.images = (this.appService.getLocalData('images') ? this.appService.getLocalData('images') : []);
    this.styleCodeSelected = (this.appService.getLocalData('styleCodeSelected') ? this.appService.getLocalData('styleCodeSelected') : '');
    if (!this.styleCodeSelected && !!this.pageContent) {
      this.styleCodeSelected = this.pageContent.styles[0].code;
    }
  }

  selectCode() {
    this.appService.saveLocalData('styleCodeSelected', this.styleCodeSelected);
  }
}
