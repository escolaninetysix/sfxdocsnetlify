{
"date": "2019-06-12",
"title": "BCC Invert Solarize",
"category": "BCC Color & Tone",
"link": "bcc-invert-solarize/"
}

 

|  |  |
| --- | --- |
| [![rgbblend.redmix.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbblend.redmix.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbblend.redmix.0.jpg) | [![invert.filtered.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.filtered.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.filtered.2.jpg) |
| Source image | Filtered image |


### Overview


Invert Solarize inverts one or more channels in the source image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Channels** **menu** specifies which channels to invert. You can choose *RGB; RGBA* (RGB and Alpha); *Alpha*; any combination of *Red, Green*, and *Blue*; *Luminance*; *Hue*; *Saturation*; or *Lightness*.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image. In this filter, Mix with Original is rarely useful at the mid-range values; a value of 50 mixes the original and inverted images equally, producing a gray image when Invert is set to RGB.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

* Note: To achieve a solarized look, set the PixelChooser’s Matte Channel menu to Luminance or a color channel. Set Matte Type to Range. Adjust From and To until you achieve the desired effect. Use Matte Soften to control the transition between the inverted and non-inverted colors. You can also try inverting some of the RGB channels and not others.
* Note: You can use Invert Solarize to emulate the classic photographic solarization technique achieved by exposing a partially developed print to light, which exposes and darkens the lighter parts image. Using this filter, you can create a similar look by selectively inverting the light parts of your image.




|  |  |
| --- | --- |
| [![invert.solarize1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.solarize1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.solarize1.jpg) | [![invert.solarize2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.solarize2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/invert.solarize2.jpg) |
| Source image | Filtered image with solarization effect |


