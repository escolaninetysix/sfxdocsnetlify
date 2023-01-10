{
"date": "2019-06-12",
"title": "BCC Levels Gamma",
"category": "BCC Color & Tone",
"link": "bcc-levels-gamma/"
}

 [![LevelsGammaBef](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LevelsGammaBef.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LevelsGammaBef.jpg)


### Overview


Levels Gamma provides options for adjusting contrast and eliminating noise in your image. Video shot at night or in poorly lit settings often contains noise in the dark areas. Increasing Input Black removes this noise by treating all areas darker than the Input Black setting as black. Washed out or overexposed images do not contain the full range of levels. Increasing Input Black and/or decreasing Input White can boost the contrast of the image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Input Black** sets the channel values of the input image that are treated as pure black by the filter. All pixels whose value is lower than the Input Black value become the Output Black color. For example, if Input Black is set to 50, all pixels with a value of 50 or less are output to a value of 0. The remaining values (50-255) are remapped to produce a smooth gradient from black to white.




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.inputblack.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.75.jpg) | [![levels.inputblack.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputblack.125.jpg) |
| Input Black=0 | Input Black=75 | Input Black=125 |


**Input White** sets the channel values of the input image that are treated as pure white by the filter. All pixels whose value is higher than the Input White value become the Output White color. For example, if Input White is set to 200, all pixels with a value of 200 or more are output to a value of 255. The remaining values (0-200) are remapped to produce a smooth gradient from black to white.




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.inputwhite.175](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.175.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.175.jpg) | [![levels.inputwhite.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.inputwhite.125.jpg) |
| Input White=255 | Input White=175 | Input White=125 |


* Note: You can create dramatic posterization-like effects by adjusting the input levels so that only a small range of input values are used, and/or by processing chosen channels of the image.


The posterization effect below was created by increasing Input Black and decreasing Input White to create a steeper gradient between the luminance values in the image.




|  |  |
| --- | --- |
| [![levels.posterize1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.posterize1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.posterize1.jpg) | [![levels.posterize2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.posterize2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.posterize2.jpg) |
| Source image | Filtered image |


**Gamma** controls the slope of the curve used to convert from the input color values to output values in pixels brighter than Input Black and darker than Input White. Increasing Gamma from the default of 100 lightens the image and decreases contrast, while decreasing Gamma darkens the image and increases contrast.




|  |  |  |
| --- | --- | --- |
| [![levels.gamma.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.50.jpg) | [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.gamma.150](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.150.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.gamma_.150.jpg) |
| Gamma=50 | Gamma=100 | Gamma=150 |


**Output Black** sets the channel value at which black source pixels are output. For example, if Output Black is set to 15, all pixels whose values are 0-15 are output to a value of 15. If you are working with broadcast material, you may need to raise the Output Black value in order to avoid NTSC-illegal black levels.




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.outputblack.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputblack.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputblack.75.jpg) | [![levels.outputblack.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputblack.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputblack.125.jpg) |
| Output Black=0 | Output Black=75 | Output Black=125 |


**Output White** sets the channel value at which white source pixels are output. For example, if Output White is set to 240, all pixels whose values are 240-255 are output to a value of 240. If you are working with broadcast material, you may need to decrease the Output White value to avoid NTSC-illegal white levels




|  |  |  |
| --- | --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![levels.outputwhite.175](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputwhite.175.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputwhite.175.jpg) | [![levels.outputwhite.125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputwhite.125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.outputwhite.125.jpg) |
| Output White=255 | Output White=175 | Output White=125 |


**Channels** determines which channels the filter affects. The choices are *RGB, Red, Green, Blue, Red and Green, Red* and *Blue*, *Green* and *Blue*, *Difference*, and *Alpha*. Difference uses the difference between each filtered channel and the corresponding source channel.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 