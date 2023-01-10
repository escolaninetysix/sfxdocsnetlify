{
"date": "2019-06-12",
"title": "BCC Alpha Process",
"category": "BCC Key & Blend",
"link": "bcc-alpha-process/"
}

 

|  |  |  |
| --- | --- | --- |
| [![woman.original1.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.original1.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.original1.2.jpg) | [![alphaprocess.matte1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaprocess.matte1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaprocess.matte1_.jpg) | [![woman.matte.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.matte_.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.matte_.original2.jpg) |
| Source Image | Alpha Matte Image | White Level Adjusted Image |


**Overview**


The Alpha Process filter blurs the alpha channel of an image, performs levels and gamma correction on the output of the blur, and composites the output alpha with the initial alpha using the chosen apply mode. The filter also allows you to soften the matte by blurring the alpha channel after it is processed.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode, [Click Here](/documentation/continuum/bcc-compare-mode/).  

 


**Lock Blurriness:** Clicking this check box locks blurring to a horizontal scale.


**Horizontal Blur** and**Vertical Blur** control the amount of blur applied to the alpha channel in each direction. Click the **Lock Blurriness checkbox** to lock the Vertical Blur value to the Horizontal Blur.


**Black Level** sets the alpha values in the matte that are treated as pure black (transparent) by the filter. All pixels whose alpha value is lower than the Black Level value are output as transparent. For example, if Black Level is set to 50, all pixels with a value of 50 or less are output to a value of 0. Increasing Black Level can help eliminate unwanted gray (semitransparent) areas in the background.


**White Level** sets the alpha values in the matte that are treated as pure white (opaque) by the filter.  All pixels whose alpha value is higher than the White Level value are output as opaque. For example, if White Level is set to 200, all pixels with a value of 200 or more are output to a value of 255. Lowering White Level can help eliminate unwanted semitransparent areas from the foreground.


**Gamma** controls the slope of the curve used to convert input color values to output values in pixels brighter than Input Black and darker than Input White. Increasing Gamma from the default of 100 lightens the image and reduces contrast. Decreasing Gamma darkens the image and increases contrast.


* Note: For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).


**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is *Normal*, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


**Post Blur**blurs the alpha channel after it is processed. Use Post Blur to soften the edges of the matte for sources with high-contrast edges. Post Blur is also useful for eliminating artifacts produced when using an apply mode to create a complex alpha composite.




|  |  |
| --- | --- |
| [![woman.matte.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.matte_.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/woman.matte_.original2.jpg) | [![alphaprocess.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaprocess.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphaprocess.2.jpg) |
| Post Blur Image=0 | Post Blur Image |


**The Blur Quality** menu has seven settings. Blur Quality affects Post Blur as well as the initial Horizontal and Vertical Blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher,* and *Gaussian Highest* produce Gaussian blurs of increasing quality. These options increase rendering times proportionately.


**The View Matte check box** allows you to view the matte as you adjust it. Be sure to deselect this option before rendering.


**Mix with Original**blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 