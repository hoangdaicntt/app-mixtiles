<?php
require 'vendor/autoload.php';

use Intervention\Image\ImageManagerStatic as Image;

class ImageCrop
{
  private $image = null;
  private $crop = null;

  public function __construct($imagePath, $cropData)
  {
    $this->image = Image::make($imagePath);
    $this->crop = $this->processCropData($cropData);
  }

  public function cropImage($pathSaveTo, $size = 500)
  {
    try {
      $width = $this->crop->width;
      $height = $this->crop->height;
      $top = $this->crop->top;
      $left = $this->crop->left;
      $sizeCurrent = $this->crop->currentSize;
      $zSize = floatval($sizeCurrent / $size);
      $zWidth = intval($width / $zSize);
      $zHeight = intval($height / $zSize);
      $zTop = abs(intval($top / $zSize));
      $zLeft = abs(intval($left / $zSize));
      $this->image->resize($zWidth, $zHeight)->crop($size, $size, $zLeft, $zTop)->save($pathSaveTo);
      return true;
    } catch (Exception $exception) {
      return false;
    }
  }

  private function processCropData($cropData)
  {
    return json_decode(base64_decode($cropData));
  }
}

$imageCrop = new ImageCrop("public/Cover-Facebook.jpg", "eyJoZWlnaHQiOjUyNSwid2lkdGgiOjE0MjAsImxlZnQiOi02OTAsInRvcCI6LTEzNSwiY3VycmVudFNpemUiOjI4NH0=");
$imageCrop->cropImage('public/aa.png', 1024);

