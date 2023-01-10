{
"date": "2019-06-12",
"title": "BCC Safe Colors",
"category": "BCC Color & Tone",
"link": "bcc-safe-colors/"
}

 ### Overview


The BCC Safe Colors filter prevents clips from having saturation values that exceed the legal limits of broadcast standards. Use this filter to limit the values that are present in the image.


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
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


The **View Mode menu** lets you view the pixels in the image that are affected by the filter.


* *Final Output* displays the final rendered effect.
* *Zebra Pattern* displays the image with a cross-hatch zebra pattern overlay where pixel values are outside of the legal broadcast limits (as determined by the filter parameters.) Note that the zebra pattern animates only when playing the timeline.
* *Clipped Pixels* displays the image with red values superimposed over areas that are not within the legal broadcast limit (as determined by the filter parameters.) The blue/green pixels are unaffected by the filter. If you view only the red channel, the affected pixels display as a mask.


**Sat. Rolloff Start** sets the starting value of the saturation values that are outside of the legal broadcast limit as determined by the filter parameters. This parameter sets the lower limit of pixels that are affected.


**Saturation Limit** sets the absolute ceiling for color saturation. Reducing this parameter reduces the saturation in the final output. Only the pixels that exceed the Saturation Rolloff Limit are affected. Saturation values are mapped linearly into the range between the Saturation Rolloff Limit and the Saturation Limit (the upper limit). If the two limits are the same value, it just hard-clips the saturation. As the lower limit is reduced, the filter starts soft-clipping the saturation.


If you choose Clipped Pixels in the View Mode menu, the red channel indicates how much the pixel’s saturation is scaled. A nonzero value indicates how much the pixel’s saturation is reduced. For example, a red channel value of 64 would correspond to reducing the saturation by 1/4 (multiplying it by .75), while a value of 128 indicates that the saturation was reduced by 1/2. 255 would indicate that the saturation was completely removed (reduced by 1), producing a monochrome image.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 