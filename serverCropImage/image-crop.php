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

  function cropImageBG($image, $width, $height, $x = null, $y = null, $bg_color = null)
  {
    $image_width = $image->width();
    $image_height = $image->height();
    if ($image_width < $width + abs($x) or $x < 0   // Is the crop width outside the image
      or $image_height < $height + abs($y) or $y < 0) {// Is the crop height outside the image
      $canvas_width = abs($x) + $width;
      $canvas_height = abs($y) + $height;
      $background = Image::canvas($canvas_width, $canvas_height);
      if ($bg_color) {
        $background->fill($bg_color);
      }
      $ins_x = abs(($x - abs($x)) / 2);
      $ins_y = abs(($y - abs($y)) / 2);
      $x = abs(($x + abs($x)) / 2);
      $y = abs(($y + abs($y)) / 2);
      $background->insert($image, 'top-left', $ins_x, $ins_y);
      $image = $background;
      unset($background);
    }


    return $image->crop($width, $height, $x, $y);
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
      $zTop = -(intval($top / $zSize));
      $zLeft = -(intval($left / $zSize));
      $this->image = $this->image->resize($zWidth, $zHeight);
      $this->cropImageBG($this->image, $size, $size, $zLeft, $zTop, '#fff')->save($pathSaveTo);
      return true;
    } catch (Exception $exception) {
      return false;
    }
  }

  public function cropImageWithBorder($pathSaveTo, $size = 500)
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
      $zTop = -(intval($top / $zSize));
      $zLeft = -(intval($left / $zSize));
      $this->image = $this->image->resize($zWidth, $zHeight);
      $this->cropImageBG($this->image, $size, $size, $zLeft, $zTop, '#fff')
        ->resizeCanvas(2, 2, 'center', true, '#FF5722')
        ->save($pathSaveTo);
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

$imageCrop = new ImageCrop("public/input.jpg", "eyJoZWlnaHQiOjI4NCwid2lkdGgiOjIwOCwibGVmdCI6MzgsInRvcCI6MCwibWluWm9vbSI6MTM2LjMwNzY5MjMwNzY5MjMyLCJjdXJyZW50U2l6ZSI6Mjg0fQ==");
$imageCrop->cropImage('public/aa.png', 1024);

