{
"date": "2019-06-12",
"title": "BCC Colorize Glow",
"category": "BCC Stylize",
"link": "bcc-colorize-glow/"
}

 

|  |  |
| --- | --- |
| [![sand dunes](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/sand-dunes1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/sand-dunes1.jpg) | [![colorizeglow.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.filtered.jpg) |
| Source Image | Filtered Image |


### Overview


The Colorize Glow filter is similar to the Glow filter but it generates the glow from a single channel and then applies a gradient to the glow. The Colorized Glow can be composited with the original image or viewed by itself.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

 


When the **Avoid Clipping checkbox** is enabled, the glow expands outside the borders of the original source. The **PixelChooser** is disabled if Avoid Clipping is selected.


The **Glow Channel menu** selects the channel in the source image from which the glow is derived. Pixels with higher values in the selected channel have higher intensities.


* *Luma, Red, Green*, and *Blue* use the corresponding color channel and multiply it by the source alpha channel.
* *Luma* *Inverse* uses the inverted luma channel.
* *Unmultiplied* *Luma* and *Alpha* use the unmodified corresponding source channels.
* *Luma Cartoon Edges* and *Alpha Cartoon Edges* find edges in the corresponding source channel, apply outlines to the edges, and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is selected, the Source Edges parameter group is available; **Cartoon Thickness** adjusts the width of the outlined edges, and **Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on.
* *Luma Edges* and *Alpha Edges* find edges in the corresponding source channel and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is selected, the **Source Edges** parameter group is available; **Edge Intensity** adjusts the width of the outlined edges.
* *PixelChooser* uses the region defined by the PixelChooser parameter group.


 


**Source Edges Parameter Group**


The Source Edges group provides additional control if either *Alpha Edges, Luma Edges, Alpha Cartoon Edge* or *Luma Cartoon Edges* is selected in the Glow From Channel menu.


**Cartoon Thickness/Edge Intensity** adjusts the width of the outlined edges


**Edge Pre Blur** blurs the source image before the filter searches for edges. This blur does not appear in the output; it is used only in edge detection.


**Edge Post Blur** blurs the edges before they are used to create the applied glow.


**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on. This parameter is only available when Luma Cartoon Edges or Alpha Cartoon Edges is selected in the Glow From channel menu.


**Blur Amount** controls the amount of blur applied to the image to produce the glow effect. At a value of 0, no blur is applied, so no glow is visible. Higher values produce more blur and, therefore, more glow.




|  |  |  |
| --- | --- | --- |
| [![colorizeglow.blur5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur5_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur5_.jpg) | [![colorizeglow.blur25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur25.jpg) | [![colorizeglow.blur50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.blur50.jpg) |
| Blur Amount=5 | Blur Amount=25 | Blur Amount=50 |


Increasing **Spread** causes each point in the rendered output to be affected more by points farther away in the blur. Animating Spread can cause visible jumps in the animated effect.




|  |  |  |
| --- | --- | --- |
| [![colorizeglow.spread0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread0.jpg) | [![colorizeglow.spread50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread50.jpg) | [![colorizeglow.spread100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.spread100.jpg) |
| Spread=0 | Spread=50 | Spread=100 |


The **Blur Quality menu** controls the quality of the post blur applied to the glow. Choose *Low, Medium, High, Higher* or *Highest*. Low and Medium are adequate for simple matte smoothing, but to blur the edges of a high-contrast image or animate the blur, you may need to use Highest. There is a significant rendering cost to using High, and considerably more for using Highest.


**Threshold** adjusts the sensitivity of the filter to edges in the image. Increasing Threshold reduces the amount of glow created by weaker edges in the image, so less glow appears on smaller details in the source image.


* Note: Reducing this value to 0 tends to add noise to the image. For best results, use Threshold settings of 1 or above.




|  |  |  |
| --- | --- | --- |
| [![colorizeglow.threshold1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold1.jpg) | [![colorizeglow.threshold15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold15.jpg) | [![colorizeglow.threshold30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.threshold30.jpg) |
| Threshold=1 | Threshold=15 | Threshold=30 |


**Over drive****Amount** adjusts the overall intensity of the glow created by the blur. Lower values producing a softer glow, mixing the blurred image with the resulting glow. Higher values produce a harder, more dramatic glow effect.




|  |  |
| --- | --- |
| [![colorizeglow.overdrive10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.overdrive10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.overdrive10.jpg) | [![colorizeglow.overdrive100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.overdrive100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/colorizeglow.overdrive100.jpg) |
| Overdrive=10 | Overdrive=210 |


The **Overdrive Soften** control softens the glow produced by the Overdrive parameter and pulls its edges in. Higher values of Overdrive Soften sharply reduce the edges of the glow. Negative values gently increase and soften the edges.


The **Overdrive menu** controls how the glow portion of the effect composites over the blurred portion of the effect. The resulting filtered image is then composited with the source image using the chosen Apply Mode.  For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Softness** controls a blur that is applied to the glow after the first blur and the overdrive mix.


**Intensity** scales the intensity of the glow.


The **Glow Offset** parameter offsets the glow. A positive value pushes some of the negative values positive and makes them visible in the output. A negative value reduces all the glow values, causing only the most glowing pixels to appear in the output.


The **Color Preset** **menu** allows you to choose a Colorize preset (a gradient of up to six colors to tone the effect). If the Mode menu is not set to Colorize, the presets have no affect.


 


**Gradient**


The BCC Gradient group enables complex, multi-color gradients for use in a variety of effect settings such as colorizing light sources.


For more information on the BCC Gradient tool, [Click Here](/documentation/continuum/bcc-gradient/ "Gradient").

 


**Composite Parameter Group**


The Composite parameter group contains controls that select the output of the effect and how it is composited with the source.


The **Output menu** sets the output of the effect.


* The default is *Colorize*, which displays the colorized glow effect composited with the source layer.


*[![ColorizeGlowex](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ColorizeGlowex.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ColorizeGlowex.jpg)*


* *Glow Map* displays the glow map in black and white.


[![GlowMatte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/GlowMatte1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/GlowMatte1.jpg)


* When *Matte with Glow* is selected, an alpha channel is created from the glow. Transparent and semi-transparent areas display a checkerboard image.


[![MattewGlow](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MattewGlow.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MattewGlow.jpg)


* *Mask Outside Glow* allows you to view the source with a ruby mask over the pixels that are not affect by the colorize glow effect.


*[![MaskOutsideGlow](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MaskOutsideGlow.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/MaskOutsideGlow.jpg)*


* *View**Source* views the channel from which the glow is derived.


When the **Opaque Glow checkbox** is deselected, the glow is composited with its own intensity before it is composited with the source. This makes colors at the left end of the gradient preview ramp more transparent. When this is enabled, the glow itself is opaque. Leave Opaque Glow deselected when the filter is applied to a layer with an alpha channel.


If Opaque Glow is off, **Glow Opacity** scales the opacity of the glow. Raising Glow Opacity causes more of the glow to be opaque, and the colors at the left end of the gradient will appear more prominently in the output.


The **Apply Mode menu** determines how the filter is composited over the source image.  For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* Off is the default. If Off is chosen, no deflickering will be done.


**Mix with Original** blends the source and filtered images.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 