{
"date": "2019-06-12",
"title": "BCC Charcoal Sketch",
"category": "BCC Art Looks",
"link": "bcc-charcoal-sketch/"
}

 

|  |
| --- |
| [![Charcoal Sketch 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-1.jpg) |




|  |
| --- |
| [![Charcoal Sketch 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-2.jpg) |




|  |
| --- |
| [![Charcoal Sketch 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-3.jpg) |




|  |
| --- |
| [![Charcoal Sketch 4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Charcoal-Sketch-4.jpg) |


### Overview


This filter takes input from an image clip and converts this into a charcoal sketch style animation.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Temporal Smoothing Checkbox:** Used to enable the smoothing of the filter result over time.


**Soften**: Softens / smooths the image before the lines are drawn.


**Line Style pop-up**: Offers 3 options to set the width of the sketched lines:


* *Light*: generates thinner sketch lines
* *Medium*: generates medium weight sketch lines
* *Heavy*: generates thicker sketch lines


**Line Threshold**: Sets the base threshold value for the lines generation. Boosting this tends to produce a cleaner looking result.


**Line Width**: Used to attenuate the width of the lines.


 


**Advanced Group**


This group of controls, which defaults to closed, enables you to fine tune the result of the contouring and line generation.


**Boost Contrast**: Boosts the contrast of the input image.


**Soften Max Deviation**: This is a fine-tuning instrument for the master soften parameter. Increasing the value in this parameter increases the amount of softening that is applied to the image.


**Soften Iterations**: This is used to apply multiple passes of softening to the image. A value of 2 applies the softening algorithm two times, a value of 3 applied the softening 3 times etc.


**Sensitivity**: Used to include soft shading in the white areas of the filter result. Higher values generate more soft shading, lower values generate a more hard-line black and white binary bitmap image


 


**Lines Group**


Contains controls for the weight of the sketch


* *Thicken*: Secondary control to make the lines thicker
* *Blur*: Applies a blur filter to the lines
* *Median*: Applies a median filter to the lines
* *Contract/Expand*: Contracts or expands the width of the lines


**FG Opacity**: Controls the opacity of the Foreground color. Values of less than 100 add transparency to the Foreground.


**FG Color picker**: Used to set the Foreground color.


**BG Opacity**: Controls the opacity of the Foreground color. Values of less than 100 add transparency to the Foreground.


**BG Color picker**: Used to set the Foreground color.


**Reverse Colors**: Swaps the FG and BG colors


**Apply Mode**: This pop-up is used to blend the filtered result back into the original image and contains all of the apply mode compositing options that are found in most every filter in the package.


**Apply Mix**: Blends the current apply mode with the normal apply mode


**Mix With Original**: Blends the effect with the original unfiltered clip


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 