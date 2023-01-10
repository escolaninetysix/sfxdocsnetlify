{
"date": "2019-06-12",
"title": "BCC Water Color",
"category": "BCC Art Looks",
"link": "bcc-water-color/"
}

 [![Water Color 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-1.jpg)


[![Water Color 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-2.jpg)


[![Water Color 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/Water-Color-3.jpg)


### Overview


This filter takes input from an image clip and converts this into a water-color stylized animation.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare Mode pop­up:** Controls what is displayed by the Compare Mode. The options are:


* *Off* shows the output of the filter.
* *Side By Side* the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide* operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**View pop-up**: Allows you to view the final output or the output of some of the individual steps outline above. Note that setting this to Line Mask can produce some useful textured looks that you can’t otherwise get with the filter.


* *Output* – This is the normal display setting, which combines the posterized background and the generated lines.
* *Background* – Displays only the posterized background image without additional lines.
* *Lines* – Displays only the generated lines.
* *Cartoon Matte* – Displays only the matte used by the filter for the image posterization.


**Temporal Smoothing Pop-up**: Used to enable the smoothing of the filter result over time.


* *Off* – Function is disabled.
* *On* – Function is enabled.
* *Lines Only* – Temporal Smoothing is applied only to the lines and not the composited background.


**Boost Contrast**: Increases the overall contrast of the filter result. Higher values increase contrast.


**Soften**: Softens / smoothes the image before the lines are drawn.


**Cartoon On Checkbox**: Used to enable or disable the cartoon / contouring effect.


**Cartoon Mix**: Blends the cartoon / contour result with the image.


**Cartoon Levels**: Used to control the amount of image contouring. Lower values generate fewer contours.


**Lines On Checkbox**: Used to control whether lines are drawn around the contour / cartoon regions.


**Line Style pop-up**: Offers 3 options to set the width of the sketched lines:


* *Light* – generates thinner sketch lines
* *Medium* – generates medium weight sketch lines
* *Heavy* – generates thicker sketch lines


**Line Threshold**: Sets the base threshold value for the lines generation. Boosting this tends to produce a cleaner looking result.


**Line Width**: Used to attenuate the width of the lines.


**Line Soften**: Controls the softness of the pencil lead. Higher values generate softer lines.


**Paint Mix**: Used to blend the watercolor paint. High values generate a watercolor paint look, low values generate a more cartoon style look.


**White Boost**: Pushes the pixel values in the image toward white. Higher values bring more white into the image.


 


**Advanced Group**


This group of controls, which defaults to closed, enables you to fine tune the result of the contouring and line generation.


**Soften Max Deviation**: This is a fine-tuning instrument for the master soften parameter. Increasing the value in this parameter increases the amount of softening that is applied to the image.


**Soften Iterations**: This is used to apply multiple passes of softening to the image. A value of 2 applies the softening algorithm two times, a value of 3 applied the softening 3 times etc.


 


**Cartoon Group**


This group includes additional parameter controls for fine-tuning the image contouring


**Soften Order pop-up**: Determines whether the softening controls in the Soften group below are applied before or after the image contouring (cartoon) pass with the following 3 options:


* *Before Cartoon* – softens the image before it is posterized
* *After Cartoon* – softens the image after it is posterized
* *Both* – softens the image both before and after posterization


**Only Background**: If this is checked the posterize is applied to the background image, and does not affect the generation of lines. The lines are based on the smoothed, but not posterized, image. Leaving this off tends to generate more distinct lines that follow the edges generated by the posterization.


**Use Matte Checkbox**: Protects large solid areas of color from being affects by the contouring pass.


* *Minimum Mix* – Blends the contoured image result with the protected image result.
* *Matte Threshold* – Used to determine the pixel values in the image that are included in the protection matte.
* *Expand Matte* – Spreads the Matte outwards.
* *Harden Matte* – Hardens the Matte edges.
* *Softer Cartoon Checkbox* – Softens the image contouring.


 


**Lines Group**


This group includes additional parameter controls for fine-tuning the image contouring.


* *Intensity* – Increases the intensity of the edges when they are rendered into lines.
* *Gamma –* Increasing gamma makes the lines more prominent.
* *Thicken –* Makes the lines thicker.
* *Blur –* Applies a blur filter to the lines.
* *Median –* Applies a median filter to the lines.
* *Contract/Expand –* Contracts or expands the width of the lines.
* *Invert Lines Checkbox –* Inverts the generated lines. When disabled (default position) the result is solid colored lines over the background image. When enabled the result is a solid color background over image colored lines.
* *Line Color –* Used to set the line color*.*
* *Opacity –* Used to set the line opacity.


**Mix With Original**: Blends the effect with the original unfiltered clip.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 