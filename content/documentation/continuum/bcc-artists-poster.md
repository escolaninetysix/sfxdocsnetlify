{
"date": "2019-06-12",
"title": "BCC Artists Poster",
"category": "BCC Art Looks",
"link": "bcc-artists-poster/"
}

 

|  |  |
| --- | --- |
| [![bright.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bright.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bright.original.jpg) | [![artist.filtered.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered.2.jpg) |
| Source Image | Filtered Image |


### Overview


Artist’s Poster creates a posterized effect by reducing the image to eight “pure” colors (Red, Green, Blue, Cyan, Magenta, Yellow, Black, and White) and processing each color separately. At its default settings the filter outputs the NTSC-safe color that is closest to each of these eight colors.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

The **Mix Layer menu** chooses a clip or layer in the composition to composite with the source layer.


The **Black menu** determines how the black pixels in the source image are output.


* *Color* replaces the black pixels in the source image with the specified Black Color. In this example, the **Black Color** is yellow, thus all black pixels from the posterized output are replaced with yellow pixels.


[![artist.mode.color](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.color_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.color_.jpg)


* *Transparent* makes the black pixels in the source transparent.




|  |
| --- |
| [![artist.mode.transparent](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg) |


* *Mix Layer* replaces the black pixels in the source with the corresponding pixels from the layer selected in the Mix Layer menu. In this example, the **Mix Layer** is a movie file, thus the black pixels from the posterized output are replaced by the movie file.


[![artist.mode.mixlayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.mixlayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.mixlayer.jpg)


**Black Color** sets the color that replaces the original black pixels in the source image when Black Mode is set to Color. When Black Mode is not set to Color, this parameter has no effect.


**Black Mix** mixes the original black pixels with the new black pixels. If Black Mix is 100, the black pixels are output in their original colors. If Black Mix is 0, the black pixels are output according to the Black Mode setting. In the examples below, Black Mode is set to Mix Layer.




|  |  |  |
| --- | --- | --- |
| [![artist.mix.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.0.jpg) | [![artist.mix.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.50.jpg) | [![artist.mix.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mix_.100.jpg) |
| Black Mix=0 | Black Mix=50 | Black Mix=100 |


* Note: The other colors’ <Color Name>, Color and Mix controls work in the same way as the corresponding Black, Black Color and Black Mix controls.


**Threshold Parameter Group**


The Threshold parameters adjust the division of pixels into color channels.


The **Red Threshold, Green Threshold**, and **Blue Threshold** affect how the filter divides the image into the eight colors. The default setting for each of these controls is 50%. Pixels whose red, green and blue channels are less than 50% become black pixels. Pixels whose red channel is more than 50% and whose green and blue channels are less than 50% become red pixels. Pixels whose red and green channels are more than 50% become yellow pixels, and so on.


Adjusting the Thresholds changes this division into colors. Reducing Red Threshold makes some black pixels red, some blue pixels magenta, and so on. If you reduce Red Threshold to 0, only pixels whose red channel value is 0 can be black, green, blue, or cyan.




|  |  |  |
| --- | --- | --- |
| [![artist.threshold.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.0.jpg) | [![artist.threshold.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.50.jpg) | [![artist.threshold.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.threshold.100.jpg) |
| Red Threshold=0 | Red Threshold=50 | Red Threshold=100 |


**Color Soften** softens color transitions on a pixel-by-pixel basis. Artist’s Poster works by creating a “color map” which transforms the pixels in the source image into output pixels. Color Soften softens this color map. This does not reduce the sharpness of details in the original image; rather it reduces harsh color contrasts, making even extreme posterizations more natural-looking.




|  |  |
| --- | --- |
| [![artist.mode.transparent](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg) | [![artist.soften.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.soften.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.soften.60.jpg) |
| Color Soften=0 | Color Soften=60 |


**Blur Parameter Group**


**Pre Blur** blurs the source image before the posterization is applied. This softens the edges of the posterized image without increasing the number of output colors.




|  |  |
| --- | --- |
| [![bright.contrast.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bright.contrast.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bright.contrast.60.jpg) | [![artist.filtered-preblur-15-copy.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered-preblur-15-copy.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered-preblur-15-copy.2.jpg) |
| Pre Blur=0 | Pre Blur=15 |


**Post Blur** blurs the posterized image, creating softer edges where the colors blend. This means that the number of output colors is increased again after the posterization is applied.




|  |  |
| --- | --- |
| [![artist.mode.transparent](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.mode_.transparent.jpg) | [![artist.filtered postblur 15 copy](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered-postblur-15-copy.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/artist.filtered-postblur-15-copy.jpg) |
| Post Blur=0 | Post Blur=15 |


**Blur Transparency** blurs the alpha channel. This parameter can be useful if you created an alpha channel by setting one or more of the Color Modes to Transparent.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 