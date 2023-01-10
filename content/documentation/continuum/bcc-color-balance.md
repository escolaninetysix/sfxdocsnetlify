{
"date": "2019-06-12",
"title": "BCC Color Balance",
"category": "BCC Color & Tone",
"link": "bcc-color-balance/"
}

 [![Color BalanceBef](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Color-BalanceBef.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Color-BalanceBef.jpg)


### Overview


Color Balance performs a true photographic RGB color correction, allowing you to make independent adjustments to the red, green, and blue channels of the image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Type Mode menu** specifies the method used to make the RGB balance adjustments.


* *Photo Positive* simulates a color correction effect on a device that produces a positive image, such as a video camera. Brighter pixels are affected more than darker ones, and pixels for which the channel is completely off (0) are not affected at all. Use Photo Positive to correct colors in the lighter sections of the image.
* *Photo Negative* simulates a color correction effect on a device that produces a negative image, such as an enlarger. Darker pixels are affected more than brighter ones, and pixels for which the channel is completely on (255) are not affected at all. Use Photo Negative to correct colors in the darker sections of the image.
* *Linear* mode adds the corrections equally to all pixels in the image.


This example shows the original image before any color adjustments are applied.


[![colorize.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorize.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorize.source.jpg)


Increasing the Blue and Green values in this image using the Linear mode adds cyan uniformly throughout the image, giving the shadows a cyan cast.  

[![colorbalance.linear1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.linear1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.linear1.jpg)  

The Photo Positive mode corrects the image selectively using luminance information, which allows you to adjust the light areas of the image without affecting the dark areas.


[![colorbalance.positive](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.positive.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.positive.jpg)


In this example, the Red value of the image is decreased using the Linear mode, which gives the light areas a cyan cast.  

[![colorbalance.linear2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.linear2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.linear2.jpg)


Using the Photo Negative mode adjusts the color selectively, allowing you to correct the dark areas without affecting the light areas.  

[![colorbalance.negative](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.negative.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorbalance.negative.jpg)


 **Red Balance, Green Balance**, and **Blue Balance** adjust the relative intensity of each corresponding RGB channel.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 