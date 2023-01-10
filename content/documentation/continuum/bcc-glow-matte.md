{
"date": "2019-06-12",
"title": "BCC Glow Matte",
"category": "BCC Obsolete",
"link": "bcc-glow-matte/"
}

 

|  |  |
| --- | --- |
| [![sand dunes](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/sand-dunes.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/sand-dunes.jpg) | [![GlowMatte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/GlowMatte.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/GlowMatte.jpg) |
| Source Image | Filtered Image |


### Overview


The Glow Matte filter is similar to the Colorize Glow filter, except that it outputs an alpha channel instead of colors. This filter is useful for making semi-abstract mattes based on a glow of any channel in the original image. For information on the BCC Colorize Glow filter, see the help file for the individual BCC Colorize Glow filter.


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


The **Matte Layer menu** lets you choose an alternate clip or layer from which the matte is derived. The layer is resized to the size of the destination layer.


The **Glow Channel menu** selects the channel in the source image from which the glow is derived. Pixels with higher values in the selected channel are considered to have higher intensities.


* *Luma*, *Red, Green*, and *Blue* use the corresponding color channel and multiply it by the source alpha channel.
* *Luma* *Inverse* uses the inverted luma channel.
* *Unmultiplied Luma* and *Alpha* use the unmodified corresponding source channels.
* *Luma Cartoon Edges* and *Alpha* *Cartoon* *Edges* find edges in the corresponding source channel, apply outlines to the edges, and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is selected, all the **Source Edges** parameters apply.
* *Luma* *Edges* and *Al*pha *Edges* find edges in the corresponding source channel and use the resulting image. When Luma Edges or Alpha Edges is selected, all the **Source Edges** parameters apply.
* *PixelChooser* uses the region defined by the PixelChooser parameter group.


 


**Source Edges Parameter Group**


The Source Edges parameter group provides additional control if either *Alpha Edges, Luma Edges, Alpha Cartoon Edge* or *Luma Cartoon Edges* is selected in the Glow From Channel menu. If *Red, Green, Blue, Luma, Unmultiplied Luma* or *Alpha* is selected, the Source Edges, Edge Pre Blur, Edge Post Blur, and Cartoon Threshold parameters have no affect. The other parameters apply no matter what is selected in the Glow From Channel menu.


**Thickness/Intensity** adjusts the width of the edges when Alpha Edges, Luma Edges, Alpha Cartoon Edge or Luma Cartoon Edges is selected in the Glow From Channel menu. If another Glow from Channel selection is made, this parameter does not apply.


**Edge Pre Blur** blurs the source image before the filter searches for edges. This blur does not appear in the output; it is used only in edge detection.


**Edge Post Blur** blurs the edges before they are used to create the applied light.


**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on. This parameter is only available when Luma Cartoon Edges or Alpha Cartoon Edges is selected in the Glow From channel menu.


**Blur Amount** controls the amount of blur applied to the image to produce the glow effect. At a value of 0, no blur is applied, so no glow is visible. Higher values produce more blur and, therefore, more glow.  

Increasing Spread affects each point in the rendered output more by points farther away in the blur. Animating Spread can cause visible jumps in the animated effect.


The **Blur Quality menu** controls the quality of the post blur applied to the glow. Choose *Low, Medium, High, Higher* or *Highest*. There is a significant rendering cost to using High or Higher, and considerably more for using Highest.


**Threshold** adjusts the sensitivity of the filter to edges in the image. Increasing Threshold reduces the amount of glow created by weaker edges in the image, so less glow appears on smaller details in the source image.


* Warning: Reducing this value to 0 tends to add noise to the image. For best results, use Threshold settings of 1 or above.


**Overdrive** adjusts the overall intensity of the glow created by the blur. Lower values producing a softer glow, mixing the blurred image with the resulting glow. Higher values produce a harder, more dramatic glow effect.


**Overdrive** **Soften** softens the overdrive mix that creates the glow, and makes it nonlinear. The effect of increasing Overdrive Soften is similar to, but not identical to the effect of reducing Overdrive.


The **Overdrive Apply Mode** menu controls how the glow portion of the effect composites over the blurred portion of the effect. The settings all correspond to apply modes.


* Note: For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).


**Softness** controls a blur that is applied to the glow after the Pre Blur and the Overdrive Mix are applied.


Adjust **Intensity** to scale the intensity of the glow.


Gamma controls the value of the middle tones while leaving the white and black of the image unaltered. The **Gamma** adjustment is made to the derived alpha. Increasing gamma spreads the alpha so that the matte is more opaque.


**Alpha Offset** controls an offset that is added to the output alpha. Create a transition by animating this from –100 to 100. At a value of -100, the entire image keys out. At a value of 100, the entire image is opaque.


The **Output****menu** controls the output of the filter. You can also use this menu to preview the matte, or preview the source channel used by the filter to create the effect.


* *Replace* *Alpha* replaces the source alpha with the matte created by the filter.
* *Screen* *Alpha* screens the alpha channel created by the filter with the source alpha channel. Areas that are opaque in either alpha channel are opaque in the output.
* *Mult*. *Alpha* multiplies the alpha channel created by the filter with the source alpha channel. Only areas that are opaque in both alpha channels are opaque in the output.
* *Diff*. *Alpha* subtracts the alpha channel created by the filter from the source alpha.
* *View* *Matte* displays a grayscale preview of the alpha channel created by the filter. Opaque regions are white, and transparent regions are black.
* *View* *Inverse* *Matte* inverts the matte created by the filter and displays a grayscale preview of the result.
* *View* *Source* displays the chosen Glow From Channel menu setting.
* *Mask Source* shows the source of the Matte with a ruby (50% red) mask applied to pixels that are transparent in the output.


**Choke** is applied after the output stage and will affect the composited matte. Adjusting choke will not affect the image if the output is set to View Matte or Mask Source.


**Mix** **with** **Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 