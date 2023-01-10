{
"date": "2019-06-12",
"title": "BCC Light Wrap",
"category": "BCC Key & Blend",
"link": "bcc-light-wrap/"
}

 

|  |  |
| --- | --- |
| [![bcclightwrap_before](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_before.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_before.jpg) | [![bcclightwrap_after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_after.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_after.jpg) |
| Composited image | Composited using Light Wrap |


### Overview


The BCC Light Wrap reflects a background image around the edges of a foreground image to form a border. This creates the illusion that light from the background image is reflected onto the foreground image. This creates a more convincing composite by making it appear as if the images were shot in the same environment.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

* *Vegas Pro Workflow Tip:*  To use the Light Wrap feature in Vegas Pro you must apply the filter in Custom Composite Mode.  For more information on working with Custom Composite Modes in Vegas, [Click Here](/documentation/continuum/working-in-vegas-pro/ "Working in Sony Vegas").![Vegas Custom Composite](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2019/03/Vegas1.png)Using Custom Composites in Vegas Pro


* Choose *Normal* to view the composite of the background track wrapped around the edges of the source layer.
* Choose *Wrap* *Only* to view only the wrap (and not the source image) composited over the background track in the timeline.
* Choose *Wrap* *on* *Black* to view only the wrap (and not the source image) composited over a black background. This is useful when setting up the effect.




|  |  |  |
| --- | --- | --- |
| [![bcclightwrap_after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_after.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_after.jpg) | [![bcclightwrap_wraponly](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_wraponly.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_wraponly.jpg) | [![bcclightwrap_wrapblack](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_wrapblack.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_wrapblack.jpg) |
| Normal | Wrap Only | Wrap on Black |


The **Background menu** allows you to choose the media to use as the reflected source.


**Lightness** sets the lightness value of the reflected image. Negative values make the reflection darker and positive values make the reflection lighter




|  |  |  |
| --- | --- | --- |
| [![bcclightwrap_lightnessn1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightnessn1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightnessn1.jpg) | [![bcclightwrap_lightness.5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightness.5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightness.5.jpg) | [![bcclightwrap_lightness1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightness1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_lightness1.jpg) |
| Lightness= -1 | Lightness=.5 | Lightness=1 |


The **Softness** parameter softens the edges of the border image that is reflected or wrapped.


**Width** controls the width of the reflection or wrap that is generated. Higher numbers result in a larger border. The following examples show the View menu set to Wrap On Black.




|  |  |
| --- | --- |
| [![bcclightwrap_width3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_width3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_width3.jpg) | [![bcclightwrap_width20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_width20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bcclightwrap_width20.jpg) |
| Width=3 | Width=20 |


The **Apply Mode menu** determines the method that is used to composite the border.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 