{
"date": "2019-06-12",
"title": "BCC Dv Fixer",
"category": "BCC Image Restoration",
"link": "bcc-dv-fixer/"
}

 [![Dv Fixer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Dv-Fixer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Dv-Fixer.jpg)


[![Dv Fixer 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Dv-Fixer-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Dv-Fixer-1.jpg)


### Overview


The primary purpose of this filter is to remove diagonal stair-caseing (also known as aliasing or jaggies) that are apparent in images or clips that have been subject to DV compression, while maintaining the overall sharpness of the input image.


### Function


In most cases this filter can simply be dragged onto the clip that has the jaggies and the filter will handle the smoothing function automatically. You may want to tweak the parameter controls slightly to customize the filter based on the amount of stair-casing present in the input image. If you decide to make changes to any of the filters’ parameters, we suggest that you start by setting the filter to preview mode so that you can easily see the pixels that will be affected by the filter as you make adjustments (you should remember to disable the preview mode before rendering.)


 


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**Preview Mode checkbox**: When enabled the composite viewer will display an interactive black and white image that shows the image pixels that will be affected by the filter in white and the pixels that will remain unaffected by the filter in black.


**Threshold**: Use this parameter to determine the pixels that are to be affected by the filter.


**Threshold Soften**: This parameter controls the slope of the Threshold cutoff curve.


**Iterations**: Use this parameter to control the amount of times the image is filtered.


**Apply Mode**: This pop-up contains all of the apply mode compositing options, such as Add, Multiply, Difference etc.


**Apply Mix**: Used to blend the currently selected Apply Mode with the Normal Apply Mode.


**Mix with Original**: Used to blend the filtered result with the original image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 