{
"date": "2019-06-12",
"title": "BCC Color Correction",
"category": "BCC Color & Tone",
"link": "bcc-color-correction/"
}

 

|  |  |  |
| --- | --- | --- |
| [![colorcorrect.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg) | [![colorcorrect.hue.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.20.jpg) | [![colorcorrect.saturation.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.20.jpg) |
| Source Image | Hue Change | Saturation Change |


### Overview


The Color Correction filter improves the color of images or creates dramatic color effects.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Brightness** adjusts the brightness of the image. Increasing Brightness pushes colors toward white, and decreasing the setting pushes colors toward black.


**Contrast** adjusts the contrast of the image. Increasing Contrast pushes colors toward pure colors, and decreasing the setting pushes colors toward 50% gray.


**Hue** cycles the colors in the image around the color wheel in HSL color space. Most color corrections require very small changes; adjustments of 10° or less usually suffice. Adjustments larger than 10° usually produce very dramatic color changes.


**Hue Fine Control** finetunes the Hue parameter in increments of 1.




|  |  |  |
| --- | --- | --- |
| [![colorcorrect.hue.n20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.n20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.n20.jpg) | [![colorcorrect.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg) | [![colorcorrect.hue.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.hue_.20.jpg) |
| Hue=-20 | Hue=0 | Hue=20 |


**Saturation** adjusts the intensity of each color’s hue in the image. Negative values remove color from the image, and positive values add color to the image.




|  |  |  |
| --- | --- | --- |
| [![colorcorrect.saturation.n20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.n20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.n20.jpg) | [![colorcorrect.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.original.jpg) | [![colorcorrect.saturation.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorcorrect.saturation.20.jpg) |
| Saturation=-20 | Saturation=0 | Saturation=20 |


**Output Black** adjusts the luminance level of black pixels. Increasing Output Black from its default value of 0 makes black pixels brighter and pushes the RGB color space toward white.


**Output White** adjusts the luminance level of white pixels. Decreasing Output White from its default of 255 makes white pixels darker and pushes the RGB color space toward black.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 