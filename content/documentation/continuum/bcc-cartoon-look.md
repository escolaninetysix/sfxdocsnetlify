{
"date": "2019-06-12",
"title": "BCC Cartoon Look",
"category": "BCC Art Looks",
"link": "bcc-cartoon-look/"
}

 

|  |
| --- |
| [![Cartoon Look 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-1.jpg) |




|  |
| --- |
| [![Cartoon Look 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-2.jpg) |




|  |
| --- |
| [![Cartoon Look 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Cartoon-Look-3.jpg) |


### Overview


This filter is designed to emulate the look of rotoscoped animation, popularized by the film remake of “A Scanner Darkly” and also seen in broadcast TV advertisements for the Charles Schwab company.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


**View pop-up**: Allows you to view the final output or the output of some of the individual steps outline above. Note that setting this to Line Mask can produce some useful textured looks that you can’t otherwise get with the filter.


* *Output*: This is the normal display setting, which combines the posterized background and the generated lines.
* *Background*: Displays only the posterized background image without additional lines.
* *Lines*: Displays only the generated lines.
* *Cartoon Matte*: Displays only the matte used by the filter for the image posterization.


**Temporal Smoothing pop-up**: Controls the smoothing of the filter result over time and can be set to affect the overall result or restricted to the posterize stage of the filter.


* *Off:* Feature disabled.
* *On*: Filter result is smoothed over time to help reduce jitter.
* *Lines Only*: The temporal smoothing is applied only to the lines, ignoring the background.


**Soften**: Softens / smoothes the image before the lines are drawn.


**Cartoon On Checkbox**: Enables / disables the contoured cartoon effect.


**Cartoon Mix**: Blends the contoured image result with the unfiltered image.


**Cartoon Levels**: Sets the amount of contours in the filtered result – lower values generated more of a cartoon look.


**Lines On checkbox**: Enables rendering of lines generated from edges in the processed background image.


**Line Threshold**: Sets the base threshold value for the lines generation. Boosting this tends to produce a cleaner looking result.


**Line Width**: Used to set the width of the lines.


**Line Soften**: Used to set the softness of the lines.


 


**Advanced Group**


This group of controls, which defaults to closed, enables you to fine tune the result of the contouring and line generation.


**Boost Contrast**: Boosts the contrast of the input image.


**Soften Max Deviation**: This is a fine-tuning instrument for the master soften parameter. Increasing the value in this parameter increases the amount of softening that is applied to the image.


**Soften** **Iterations**: This is used to apply multiple passes of softening to the image. A value of 2 applies the softening algorithm two times, a value of 3 applied the softening 3 times etc.


 


**Cartoon Group**


This group includes additional parameter controls for fine-tuning the image contouring


**Soften Order pop-up:** Determines whether the softening controls in the Soften group below are applied before or after the image contouring (cartoon) pass with the following 3 options:


* *Before Cartoon*: softens the image before it is posterized.
* *After Cartoon*: softens the image after it is posterized.
* *Both*: softens the image both before and after posterization.


**Background Only**: If this is checked the posterize is applied to the background image, and does not affect the generation of lines. The lines are based on the smoothed, but not posterized, image. Leaving this off tends to generate more distinct lines that follow the edges generated by the posterization.


**Use Matte Checkbox**: Protects large solid areas of color from being affects by the contouring pass.


**Minimum Mix**: Blends the contoured image result with the protected image result.


**Matte Threshold**; Used to determine the pixel values in the image that are included in the protection matte.


**Expand Matte**: Spreads the Matte outwards.


**Harden Matte**: Hardens the Matte edges.


**Softer Cartoon Checkbox**: Softens the image contouring.


 


**Lines Group**


This group includes additional parameter controls for fine-tuning the image contouring.


**Detail**: Sets the level of detail of the lines that are being generated.


**Intensity**: Increases the intensity of the edges when they are rendered into lines.


**Gamma**: Increasing gamma makes the lines more prominent.


**Thicken**: Makes the lines thicker.


**Blur:** Applies a blur filter to the lines.


**Median**: Applies a median filter to the lines.


**Contract/Expand**: Contracts or expands the width of the lines.


**Invert Lines Checkbox**: Inverts the generated lines. When disabled (default position) the result is solid colored lines over the background image. When enabled the result is a solid color background over image colored lines.


**Line Color**: Used to set the line color.


**Opacity**: Used to set the line opacity.


**Line Apply Mode Pop-up**: Sets the apply mode that is used for the lines.


**Line Apply Mix**: Mixes the selected apply mode with a normal apply mode.


**Mix With Original**: Blends the effect with the original unfiltered clip.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 