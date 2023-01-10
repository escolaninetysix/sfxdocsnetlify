{
"date": "2019-06-12",
"title": "BCC Dust and Scratches",
"category": "BCC Image Restoration",
"link": "bcc-dust-and-scratches/"
}

 

|  |  |
| --- | --- |
| [![bccdustscratch_off.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccdustscratch_off.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccdustscratch_off.2.jpg) | [![bccdustscratch_on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccdustscratch_on.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccdustscratch_on.jpg) |
| Original Image | Filtered Image |


### Overview


The BCC Dust and Scratches filter removes unwanted dust and scratches from an image. The PixelChooser is especially useful to specify which areas the filter should affect.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Radius** determines the amount of pixels that are used in the evaluation. Higher values can result in an undesirable loss of detail.


**Threshold** sets the value of the image pixels that are used in the evaluation. Lower values affect a greater range of pixel values while higher values reduce the affect by limiting the density values to which the filter is applied. A value of 0 is equivalent to a range of 0-255; a value of 100 is the equivalent of setting a range of 230-255. Any pixel that falls below this parameter value is not affected by the filter.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image. At a value of 0, the image is unaffected by the filter.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 