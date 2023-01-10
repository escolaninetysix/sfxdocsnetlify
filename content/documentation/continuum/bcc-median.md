{
"date": "2019-06-12",
"title": "BCC Median",
"category": "BCC Art Looks",
"link": "bcc-median/"
}

 

|  |  |
| --- | --- |
| [![bccmedian.orig](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmedian.orig_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmedian.orig_.jpg) | [![bccmedian.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmedian.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccmedian.filtered.jpg) |
| Original Image | Filtered Image |


### Overview


The BCC Median filter makes each pixel look like the majority of its neighboring pixels. It produces a smeary painterly look, but with sharp edges (at neighborhood boundaries). The Median filter also reduces noise by eliminating “spikes,” or pixels that are very different from their neighbors (also referred to as “salt and pepper noise”).


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare Mode pop-up:** Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By Side** the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


The Mode menu determines how similarity is determined between a pixel and neighboring pixels. The area is chosen by the Median Length, Median Width, and Median Angle controls, which form a rectangle that can rotate. The default setting produces a line (a very thin rectangle).


* When *Pixel Selected by Channel* is chosen, the median is calculated for the chosen channel, then the neighboring pixel(s) that have the median channel value are averaged and replace the current pixel. For example, if the Channel menu is set to Red, then the median Red value is calculated. All neighbor pixels with that same median Red channel value are averaged.
* When *Selected Channel Only* is chosen, each pixel is altered so that its chosen channel is the median value. The other aspects of the pixel remain unchanged. For example, if the Channel menu is set to Red, the Green and Blue channels are unaffected, but the Red channel is set to the median value.
* When *RGBA Separately* is chosen, each pixel is replaced by a new pixel. The four (or three, if Preserve Alpha is enabled) channels are the median values of those channels, calculated separately.
* When *Most Common Pixel* is chosen, each pixel is replaced by the neighboring pixel that is least different than the other neighbors.


Use the **Channel menu** to specify which channel to blur. The choices are *Luminance, Lightness, Brightness, Hue, Saturation, Alpha, Red, Green*, or *Blue*.


The **Preserve Alpha checkbox** determines whether the blur uses alpha channel information. With Preserve Alpha selected, the blur does not appear in areas governed by the alpha channel (in other words the effect has zero opacity in alpha areas), with Preserve Alpha deselected, the effect is 100% opaque over the alpha channel.


**Median** **Length** and **Median** **Width** set the width of the median blur on the X-axis and the Y- axis, respectively.


**Median Angle** sets the angle of the median blur.


The **Enable Fractional checkbox** allows you to smoothly animate Median Length and Median Width by blending two passes of the effect. The fractional parts of the length and width control the blend.


**Median Level** controls the amount of blur applied to the chosen pixels. At a value of 0, no blur is applied. Higher values produce more blur.


**Softness** controls the softness of the edges between affected and unaffected pixels. Increasing Softness produces a blur with softer edges.


The **Compositing menu** sets how the blur is applied to the image, using the available Apply Modes.


For more information about the Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/). However, this menu includes three additional Apply Modes, None, Under and Over.

* *None* simply renders the blur and ignores the underlying image.
* *Under* renders the blur under the underlying image. The blur is only visible in areas where the image is transparent. This is most useful for images with an alpha channel.
* *Over* renders the blur over the underlying image.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image. At a value of 0, the image is unaffected by the filter.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 