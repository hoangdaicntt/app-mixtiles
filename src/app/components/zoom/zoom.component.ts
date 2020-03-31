import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import ImageViewer from '../../modules/iv-viewer';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit, AfterViewInit {
  @ViewChild('pinchZoomElement', {static: true}) pinchZoomElement: ElementRef;
  @Input('imageFrame') imageFrame: any;
  @Input('image') image: any;
  @Input('dataInit') pageContent: any;
  @Output('cancelEvent') cancelEvent = new EventEmitter();
  @Output('acceptEvent') acceptEvent = new EventEmitter();
  viewer: ImageViewer;
  minZoom;
  imageFrameSize = {
    current: 236,
    min: 177,
    max: 236,
    fullCurrent: 284,
    fullMin: 213,
    fullMax: 284,
  };
  initZoom: any;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.viewer = new ImageViewer(this.pinchZoomElement.nativeElement, {
      zoomValue: this.initZoom.zoom,
      snapView: false,
      minZoom: this.minZoom,
      isSetPosition: true,
      left: this.initZoom.left ? this.initZoom.left : 0,
      top: this.initZoom.top ? this.initZoom.top : 0,
    });
    this.viewer.load(this.image.path);
  }

  ngOnInit() {
    this.imageFrameSize.fullCurrent = this.imageFrame.isPadding ? this.imageFrameSize.fullMin : this.imageFrameSize.fullMax;
    if (!this.image.editData) {
      this.initZoom = this.viewDefault();
    } else {
      this.initZoom = this.viewEdited();
    }
  }

  accept() {
    const dataEdit = {
      height: parseInt(this.viewer._elements.image.style.height.replace('px', ''), 10),
      width: parseInt(this.viewer._elements.image.style.width.replace('px', ''), 10),
      left: parseInt(this.viewer._elements.image.style.left.replace('px', ''), 10),
      top: parseInt(this.viewer._elements.image.style.top.replace('px', ''), 10),
      minZoom: this.minZoom,
      currentSize: this.imageFrameSize.fullCurrent
    };
    this.acceptEvent.emit(dataEdit);
  }

  cancel() {
    this.cancelEvent.emit();
  }

  private viewDefault() {
    const result: any = {
      zoom: 100,
      top: 0,
      left: 0,
      width: this.imageFrameSize.fullCurrent,
      height: this.imageFrameSize.fullCurrent,
    };
    // default fill
    if (this.image.size.width > this.image.size.height) {
      const currentHeight = this.image.size.height * this.imageFrameSize.fullCurrent / this.image.size.width;
      result.zoom = this.imageFrameSize.fullCurrent / currentHeight * 100;
      const newWidth = this.imageFrameSize.fullCurrent * this.image.size.width / this.image.size.height;
      result.left = -(newWidth - this.imageFrameSize.fullCurrent) / 2;
    }
    if (this.image.size.width < this.image.size.height) {
      const currentWidth = this.image.size.width * this.imageFrameSize.fullCurrent / this.image.size.height;
      result.zoom = this.imageFrameSize.fullCurrent / currentWidth * 100;
      const newHeight = this.imageFrameSize.fullCurrent * this.image.size.height / this.image.size.width;
      result.top = -(newHeight - this.imageFrameSize.fullCurrent) / 2;
    }
    this.minZoom = result.zoom;
    return result;
  }

  private viewEdited() {
    let result: any = {};
    // if diff size convert
    if (this.imageFrameSize.fullCurrent !== this.image.editData.currentSize) {
      const z = this.image.editData.currentSize / this.imageFrameSize.fullCurrent;
      this.image.editData.width = this.image.editData.width / z;
      this.image.editData.height = this.image.editData.height / z;
      this.image.editData.left = this.image.editData.left / z;
      this.image.editData.top = this.image.editData.top / z;
    }
    //
    if (this.image.size.width < this.image.size.height) {
      result = {
        zoom: this.image.editData.height / this.imageFrameSize.fullCurrent * 100,
        left: this.image.editData.left,
        top: this.image.editData.top
      };
    }
    if (this.image.size.width >= this.image.size.height) {
      result = {
        zoom: this.image.editData.width / this.imageFrameSize.fullCurrent * 100,
        left: this.image.editData.left,
        top: this.image.editData.top
      };
    }
    this.minZoom = this.image.editData.minZoom;
    return result;
  }
}


