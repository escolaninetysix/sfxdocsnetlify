{
"date": "2019-06-12",
"title": "BCC Two Strip Color",
"category": "BCC Film Style",
"link": "bcc-two-strip-color/"
}

 ### [![TwoStripColor](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/TwoStripColor.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/08/TwoStripColor.jpg)


### Overview


The Two Strip Color filter simulates the look of vintage two strip or three strip film color processes.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Method:** This pop-up lets the user choose between the *additive* method used in the earliest multi-strip color processes and the *subtractive* method used in subsequent implementations of multi-strip color.


**View:** This shows the final output, any of the 9 record or dye layers.


**Bulb Color (Sub):** This control is available only if the subtractive method is used, and lets the user simulate the effect of a faded or discolored projector bulb.


**Red Filter Color:** This sets the color of the filter for the red strip that is used in exposing the layer’s black-and-white negative.


**Red Dye (Add):** This sets the color of the dye for the red strip that will be used to tone the layer’s record print if the additive method is used.


**Red Dye (Sub):** This sets the color of the dye for the red strip that will be used to tone the layer’s record print if the subtractive method is used.


**Blue-Green Filter Color:** This sets the color of the filter for the cyan strip that is used in exposing the layer’s black-and-white negative.


**Blue-Green Dye (Add):** This sets the color of the dye for the cyan strip that will be used to tone the layer’s record print if the additive method is used.


**Blue-Green Dye (Sub):** This sets the color of the dye for the cyan strip that will be used to tone the layer’s record print if the subtractive method is used.


 


**Grain On**: Adds grain to the image similar to the grain in the BCC Film Damage filter. The grain auto-animates.


**Grain Amount:** Sets the amount of grain.


**Grain Size:**Sets the size of the grain particles.


**Saturation:** Scales the saturation of each pixel. A value of 0 produces a monochrome image.


**Brightness:** Scales the brightness of each pixel. A value of 0 produces a black image.


**Exposure:** Brightens or darkens pixels that fall below the exposure cutoff level.


**Mix With Original:** Blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**Extras**


**Red Gamma:** Controls the Gamma of the red color strip.


**Red Intensity:** Controls the intensity of the red color strip.


**Blue-Green Gamma:**Controls the Gamma of the Blue-Green color strip.


**Blue-Green Intensity:**Controls the intensity of the Blue-Green color strip.


**Color 3 and 4 Layers On:**This activates two extra colors that can be added to the animation.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 