{
"date": "2019-06-12",
"title": "BCC Light Zoom",
"category": "BCC Obsolete",
"link": "bcc-light-zoom/"
}

 [![LightZoomAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LightZoomAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/LightZoomAft.jpg)


### *Deprecated – replaced by [BCC Rays Puffy](/documentation/continuum/bcc-rays-puffy)*


*We recommend use of [BCC Rays Puffy](/documentation/continuum/bcc-rays-puffy) or other similar filters in the BCC Rays \* family instead of the older BCC Light Zoom.  The newer filters in the BCC Rays \* family such as [BCC Rays Puffy](/documentation/continuum/bcc-rays-puffy) offer a more sophisticated set of looks and controls as well as faster render speeds.*


### Overview


The Light Zoom filter creates rays of light that spread out from the light source point in all directions. As the rays expand, their intensities are affected by the luminosities of the pixels that they cross. The farther from the source the ray extends, the less it is affected by the intensities of new pixels that it crosses. This process is referred to as attenuation, since the affect of the pixels on the intensity of the rays attenuates, or lessens, over time.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Light Source X** and **Y** position points set the location of the simulated light source on the X and Y axis.


**Intensity** adjusts the intensity of the light source.


The **Attenuation** **menu** chooses the type of mathematical process used to determine how the influence of pixels affecting the intensity of the rays of light changes over time. The choices are *Exp Distance SQ, Exp Distance, Expon Dist Sqrt, Dist SQ, Distance*, and *Dist Sqrt*. Experiment with the various modes to see which works best with your effect.


The following illustrations below show the affect of various Attenuation Types on the matte created by the filter.




|  |  |  |
| --- | --- | --- |
| [![lightmatte.attentype.expSQ](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.expSQ_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.expSQ_.jpg) | [![lightmatte.attentype.expdis](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.expdis.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.expdis.jpg) | [![lightmatte.attentype.distSQ](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.distSQ.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.attentype.distSQ.jpg) |
| Expon Distance SQ | Expon Distance | Distance SQ |


**Ray****Length** adjusts the length of the rays of light that emanate from the source. The length of the rays is also affected by the attenuation.




|  |  |  |
| --- | --- | --- |
| [![lightmatte.raylength.35](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.35.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.35.jpg) | [![lightmatte.raylength.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.50.jpg) | [![lightmatte.raylength.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.raylength.100.jpg) |
| Ray Length=35 | Ray Length=50 | Ray Length=100 |


**Minimum Influence** determines the minimum amount of influence the pixels have on the length of the rays. Increasing this value is similar to decreasing the Ray Length value.




|  |  |  |
| --- | --- | --- |
| [![lightmatte.minimuminf.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.10.jpg) | [![lightmatte.minimuminf.30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.30.jpg) | [![lightmatte.minimuminf.60](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.60.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.minimuminf.60.jpg) |
| Minimum Influence=10 | Minimum Influence=30 | Minimum Influence=60 |


**Aspect** adjusts the shape of the light rays and the resulting matte. Positive values stretch the rays and matte horizontally, and negative values stretch them vertically.


 


**Advanced Parameter Group**


The **Attenuation****Bias** menu determines how difference between the intensity of the pixels being passed and the intensity of the rays affects the attenuation.


* If *Off* is chosen, the difference in intensity between an individual pixel and the ray crossing it does not affect the amount of influence the pixel has on the ray’s intensity.
* *One Way* uses the Bias Amount value to determine how the influence of a pixel is affected by its intensity. Increasing positive values cause pixels that are more intense than the rays to have increasing influence on the intensity of the rays. This lightens to output. Decreasing negative cause pixels that are less intense that the rays to have increasing influence on the intensity of the rays. This darkens the output.
* *Two* *Way* is similar to One Way, but causes a more pronounced effect. For example, if the Bias Amount value is positive, Two Way increases the influence of pixels that are more intense than the rays while simultaneously decreasing the influence of pixels that are less intense than the rays.
* *Contrast* affects pixels that are closer to black or white over pixels that are closer to gray.


Increasing positive **HV Bias** values cause the rays to travel predominantly on horizontal and vertical lines. Decreasing negative values cause the rays to conform more to lines that form a 45 degree angle with the horizontal axis.


**Ray** **Holdout** **Radius** determines where the rays of light or the attenuation starts in relation to the light source. Positive values create a circular region centered around the light source beyond which the rays emanate. Attenuation does not begin until after the radius is reached. Decreasing negative values cause the attenuation to start closer to the light source point.




|  |  |  |
| --- | --- | --- |
| [![lightmatte.radius.n10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.n10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.n10.jpg) | [![lightmatte.radius.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.10.jpg) | [![lightmatte.radius.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.radius.20.jpg) |
| Ray Holdout Radius= -10 | Ray Holdout Radius | Ray Holdout Radius=20 |


**Directional****Tuning** smooths the angular behavior of the light. For most purposes, you should leave this control at the default value.


The **Color menu** determines how the applied light affects the source image. You can also use this menu to preview the source channel used by the filter to create the effect.


* *Colorize* uses the applied light to tone the image using controls similar to those in the Colorize filter.
* *Image* produces a colored lighting effect using color information from the chosen Image Layer.
* *Light* *Matte* uses the applied light to modify or create an alpha channel and displays a grayscale matte.
* *Inverse* *Light* *Matte* works similarly to Light Matte, but inverts the result.
* *Alpha* uses the applied light to modify or create an alpha channel and uses it to composite the source image.
* *View Source* displays the chosen Light From channel. This can be especially useful if you are using edges in the image as the Light From channel. In the following examples, Light From is set to Luma. See the following section for more information on the Light From menu.




|  |  |  |
| --- | --- | --- |
| [![lightzoom.mode.colorize](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.colorize.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.colorize.jpg) | [![lightzoom.mode.sourcecolor](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.sourcecolor.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.sourcecolor.jpg) | [![lightzoom.mode.lightmatte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.lightmatte.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.lightmatte.jpg) |
| Colorize | Image | Light Matte |


 




|  |  |  |
| --- | --- | --- |
| [![lightzoom.mode.invmatte](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.invmatte.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.invmatte.jpg) | [![lightzoom.mode.alpha](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.alpha_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.alpha_.jpg) | [![lightzoom.mode.viewsource](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.viewsource.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.mode_.viewsource.jpg) |
| Inverse Light Matte | Alpha | View Source |


The **Color Source Layer menu** sets the layer used when the Color menu is set to Image.


 **Source Threshold** subtracts the threshold from each pixel when computing the light.


**Light Threshold** sets a value that is subtracted from the light at each pixel before it is applied. If you are animating the position of an object, increasing Light Threshold will cause the light to fade out more rapidly as you move away from the source image.


The **Light From menu** determines which source color channel is used to create the light and to calculate the intensities of the source pixels. Pixels with higher values in the selected channel are considered to have higher intensities.


* *Luma, Red, Green*, and *Blue* use the corresponding color channel and multiply it by the source alpha channel.
* *Luma* *Inverse* uses the inverted luma channel to make the light.
* *Unmultiplied* *Luma* and *Alpha* use the unmodified corresponding source channels.
* *Luma* *Cartoon* *Edges* and *Alpha* *Cartoon* *Edges* find edges in the corresponding source channel, apply outlines to the edges, and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is selected, **Thickness/Intensity** adjusts the width of the outlined edges, and **Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on.
* *Luma* *Edges* and *Alpha* *Edges* find edges in the corresponding source channel and use the resulting image. When Luma Edges or Alpha Edges is selected, **Thickness/Intensity** adjusts the intensity of the edges, and **Edge Floor** adjusts the sensitivity of the filter when searching for edges in the source. Lower values increase sensitivity.


The illustrations below were created with the **Color menu** set to *Image*, so only the source channel used by the filter, and not the output, is visible. See “Advanced Parameter Group” for more information on the Color menu.




|  |  |  |
| --- | --- | --- |
| [![lightmatte.channel.luma](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.luma_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.luma_.jpg) | [![lightmatte.channel.unmult](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.unmult.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.unmult.jpg) | [![lightmatte.channel.alpha](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.alpha_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.alpha_.jpg) |
| Luma | Unmultiplied Luma | Luma Alpha |


 




|  |  |  |
| --- | --- | --- |
| [![lightmatte.channel.acartoon](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.acartoon.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.acartoon.jpg) | [![lightmatte.channel.lumaedge](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.lumaedge.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.lumaedge.jpg) | [![lightmatte.channel.red](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.red_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.channel.red_.jpg) |
| Alpha Cartoon Edges | Luma Edges | Red |


 


**Edges Parameter Group**


When Luma Edges or Alpha Edges is selected in the Light From Channel menu, **Thickness/Intensity** adjusts the intensity of the edges.


**Edge Pre Blur** blurs the source image before the filter searches for edges. This blur does not appear in the output; it is used only in edge detection. This parameter only works if the Light From Channel menu is set to Luma Edges, Alpha Edges, Luma Cartoon Edges, or Alpha Cartoon Edges.


**Edge Post Blur** blurs the edges before they are used to create the applied light.This parameter only works if the Light From Channel menu is set to Luma Edges, Alpha Edges, Luma Cartoon Edges, or Alpha Cartoon Edges.


**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on. This parameter is only available if the Light From Channel menu is set to Luma Cartoon Edges or Alpha Cartoon Edges.


The **Color Preset menu** allows you to choose a Colorize preset (a gradient of up to six colors to tone the light). If the Mode menu is not set to Colorize, the presets have no affect.


 


**Gradient**


The BCC Gradient group enables complex, multi-color gradients for use in a variety of effect settings such as colorizing light sources.


For more information on the BCC Gradient tool, [Click Here](/documentation/continuum/bcc-gradient/ "Gradient").

 


The **Apply** **Mode** **menu** controls how the filter is composited over the source image.  For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

 


**Composite Parameter Group**


These controls determine how the applied light is composited over the underlying image. When the **Opaque Light checkbox** is selected, the light created by the effect is opaque. Deselect this option to create light with a range of transparency.




|  |  |
| --- | --- |
| [![lightzoom.opaquelight.off](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.opaquelight.off_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.opaquelight.off_.jpg) | [![lightzoom.opaquelight.on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.opaquelight.on_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.opaquelight.on_.jpg) |
| Opaque Light=off | Opaque Light=on |


**Light****Opacity** controls the opacity of the light as it is composited over the source image.




|  |  |
| --- | --- |
| [![lightzoom.lightopacity.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.lightopacity.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.lightopacity.50.jpg) | [![lightzoom.lightopacity.150](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.lightopacity.150.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightzoom.lightopacity.150.jpg) |
| Light Opacity=50 | Light Opacity=150 |


**Apply Mix** controls the mix of the chosen Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


The **Noise menu** determines which aspect of the effect is affected by the noise.


* When *Off* is chosen, the noise does not affect the output, and the remaining parameters in this section have no affect.
* *Source* *Light* causes the noise to affect the intensity of the source in the chosen Light From channel. See page 34 for more information on the Light From menu.
* *Attenuation* causes the noise to affect the amount of attenuation the light rays experience as the emanate from the source and interact with the pixels they cross.
* *Light* causes the noise to affect the light output by the filter. This choice often creates somewhat grainy images.
* *View Noise* displays a grayscale preview of the noise. The illustrations throughout this section were created with Noise Target set to View Noise.


* Note: Setting Noise to Attenuation has a similar effect to that of Stringiness in the Light Rays filters.


 


**Noise Parameter Group**


**Noise** **Density** sets the percentage of pixels that are affected by the noise.


**Noise** **Intensity** adjusts the intensity of the noise. Negative values cause the noise to have the opposite effect on the selected Noise Target as positive values.




|  |  |
| --- | --- |
| [![lightmatte.noiseint.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noiseint.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noiseint.50.jpg) | [![lightmatte.noiseint.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noiseint.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noiseint.100.jpg) |
| Noise Intensity=50 | Noise Intensity=100 |


**Noise****Blur** applies a blur to the noise, creating a smoother, more organic, effect.


**Noise** **Blur** **Quality** sets the quality of the Noise Blur. *Pyramid* is the fastest option and is generally adequate unless Noise Target is Light. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices*, Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher*, and *Gaussian Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


When the **Bidirectional Noise checkbox** is selected, the noise affects the target both positively and negatively. For example, in the Noise menu is set to Attenuation and Bidirectional Noise is selected, the attenuation both increases in some regions and decreases in others. If Bidirectional Noise is not selected, the attenuation increases in some areas, and never decreases by the noise.




|  |  |
| --- | --- |
| [![lightmatte.noise.bidir.off](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noise_.bidir_.off_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noise_.bidir_.off_.jpg) | [![lightmatte.noise.bidir.on](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noise_.bidir_.on_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/lightmatte.noise_.bidir_.on_.jpg) |
| Bidirectional Noise=off | Bidirectional Noise=on |


**Seed** determines which value is input to the random number generator used by the filter to create noise. Adjust this value when you like the overall effect but want to adjust the random configuration of the noise pattern.


* Note: Animating Seed creates noise that varies from frame to frame, because the noise affects a different randomly chosen group of pixels in each consecutive frame. A constant value creates static noise that retains its appearance from frame to frame.


The **Auto Animate checkbox** causes the filter to use a different random number seed for each frame. This is best used with small amounts of noise because it can produce results that are chaotic.


**Perturbation** and **Perturbation** **Seed** add a small amount of randomness to the numbers produced by Seed, allowing you to create noise patterns that differ between frames by a controlled amount. The best way to do this is to animate Perturbation Seed by at least one unit from one frame to the next, unless you want the noise pattern the same for some consecutive frames. Then adjust Perturbation until you get the desired amount of change.


 


**Radial Matte Parameter Group:**  

If the Radial Matte On checkbox is not selected, the parameters in this section have no affect. The **Inside Radius** and **Outside Radius** position point controls set the range of the matte, and the **Inside Blend** and **Outside Blend** soften the matte.To create a wipe using this filter, animate Outside Radius from a negative value to a value that displays the entire image.


When the**Radial Matte On checkbox** is selected, the Light Zoom filter creates a matte over the light. Deselecting the Radial Matte On checkbox turns the matte off.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

The **PixelChooser Target menu** sets which parameters are affected by the PixelChooser.


* Choosing *Light* scales down the light level at each point in the effect.
* *Mix* makes the PixelChooser behave in the same way that it does in most filters – it mixes the original image with the filtered image.
* *Source* *Light* uses the pixel chooser to mask the image as the light is created. It does not affect the compositing of the light over the image.
* *Attenuation* scales down the attenuation at each point where pixels are not fully chosen. This tends to make the rays shorter. You can make the rays stop in an unchosen region and pick up again in the chosen region.
* *Attenuation* *Boost* reverses Attenuation; rays travel further in unchosen regions.
* *Off* turns off these options.


