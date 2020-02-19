import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input('image') image: any;
  @Input('imageFrame') imageFrame: any;
  @Output('selectEvent') selectEvent = new EventEmitter();

  imageFrameSize = {
    current: 236,
    min: 177,
    max: 236,
    fullCurrent: 284,
    fullMin: 213,
    fullMax: 284,
  };
  positionImage = {
    top: 0,
    left: 0,
    zoom: 0,
    width: 0,
    height: 0,
  };

  constructor() {
  }

  ngOnInit() {
  }

  getImagePosition() {
    this.imageFrameSize.current = this.imageFrame.isPadding ? this.imageFrameSize.min : this.imageFrameSize.max;
    this.imageFrameSize.fullCurrent = !!this.image.editData ? this.image.editData.currentSize : this.imageFrameSize.fullCurrent;

    if (!this.image.editData) {
      return this.viewDefault();
    } else {
      return this.viewEdited();
    }
  }

  viewEdited() {
    const z = this.imageFrameSize.fullCurrent / this.imageFrameSize.current;
    this.positionImage.height = this.image.editData.height / z;
    this.positionImage.width = this.image.editData.width / z;
    this.positionImage.top = this.image.editData.top / z;
    this.positionImage.left = this.image.editData.left / z;
    return JSON.parse(JSON.stringify(this.positionImage));
  }

  viewDefault() {
    // default fill
    if (this.image.size.width > this.image.size.height) {
      const newHeight = this.imageFrameSize.current;
      const newWidth = newHeight * this.image.size.width / this.image.size.height;
      const paddingLeft = (newWidth - this.imageFrameSize.current) / 2;
      this.positionImage.height = newHeight;
      this.positionImage.width = newWidth;
      this.positionImage.top = 0;
      this.positionImage.left = -paddingLeft;
    }
    if (this.image.size.width < this.image.size.height) {
      const newWidth = this.imageFrameSize.current;
      const newHeight = newWidth * this.image.size.height / this.image.size.width;
      const paddingTop = (newHeight - this.imageFrameSize.current) / 2;
      this.positionImage.height = newHeight;
      this.positionImage.width = newWidth;
      this.positionImage.left = 0;
      this.positionImage.top = -paddingTop;
    }
    if (this.image.size.width === this.image.size.height) {
      this.positionImage.height = this.imageFrameSize.current;
      this.positionImage.width = this.imageFrameSize.current;
      this.positionImage.left = 0;
      this.positionImage.top = 0;
    }

    return JSON.parse(JSON.stringify(this.positionImage));
  }

  selectImage(image: any) {
    this.selectEvent.emit(image);
  }
}
