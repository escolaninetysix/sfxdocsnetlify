{
"date": "2019-06-12",
"title": "BCC Rays Ripply",
"category": "BCC Lights",
"link": "bcc-rays-ripply/"
}

 

|  |  |
| --- | --- |
| [![rays_filters.orig](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_filters.orig_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_filters.orig_.jpg) | [![rays_ripply.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.filtered.jpg) |
| Source image | Filtered image |


### Overview


The BCC Rays Ripply filter combines a light rays effect with a rippled light effect. The resulting light is generated from a selected channel in the source image and spreads from a source point in all directions.


This filter is one of a family of related BCC volumetric light rays generators which each give their own variation on the look and shape of the light rays:


* [BCC Rays Cartoon](/documentation/continuum/bcc-rays-cartoon)
* [BCC Rays Puffy](/documentation/continuum/bcc-rays-puffy)
* [BCC Rays Radiant Edges](/documentation/continuum/bcc-rays-radiant-edges)
* [BCC Rays Radiant Spotlight](/documentation/continuum/bcc-rays-radiant-spotlight)
* [BCC Rays Ring](/documentation/continuum/bcc-rays-ring)
* [BCC Rays Ripply](/documentation/continuum/bcc-rays-ripply)
* [BCC Rays Streaky](/documentation/continuum/bcc-rays-streaky)
* [BCC Rays Textured](/documentation/continuum/bcc-rays-textured)
* [BCC Rays Wedge](/documentation/continuum/bcc-rays-wedge)


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


The **Ripple menu** allows you to choose the type of the ripple applied to the light.


* *Light* *Source* causes the dark parts of the ripple to darken the source image and the bright parts to brighten it.
* The *Texture 1 and Texture 2* choices are much more subtle and affect only the texture of the light.
* *Off* turns off the ripple and only displays light rays.


**Ripple Intensity** scales the amount that the ripple affects the light. A value of 0 is the equivalent of setting the Ripple menu to Off.


**Wave Width** sets the distance between the peaks of the ripple waves. Wave Width does not affect the maximum displacement of each point in the image, but does affect how fast the displacement changes from point to point in the image. Wave Width also affects the number of waves visible in the effect, because as the waves become wider, fewer fit on the screen.




|  |  |
| --- | --- |
| [![rays_ripply.wavewid20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.wavewid20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.wavewid20.jpg) | [![rays_ripply.wavewid50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.wavewid50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.wavewid50.jpg) |
| Wave Width=20 | Wave Width=40 |


**Ripple Speed** controls the rate at which the waves move out from the center point. The default speed setting of 1.00 moves the ripple out by one wave width per second. A negative speed value moves the ripples toward the center. When Speed is 0, the ripple is stationary.


 


**Ripple Controls Parameter Group**


The **Waveform menu** setting determines the shape of the wave. The choices fall into two categories: Shape waveforms and Spectrum waveforms.


The Shape waveforms include *Sine, Triangle, Square, Sawtooth, Circle, Semi-Circle, Uncircle, and Half-Sine*. These names refer to the shape repeated on a graph that plots the displacement of each point in the wave on the Y axis and the distance of each point from the center on the X axis. The Shape waveforms are mathematically derived and are not intended to look natural.


For a more natural-looking alternative, experiment with the Spectrum waveforms. These are all variations on the sine wave that produce more realistic waves.


* Note: For illustrative examples of some of the various waveforms, see the Wave filter.


**Ripple Thickness** controls the shape or thickness of the ripple. Its affect is most easily seen with the Ripple Mode menu set to Light Source.


**Ripple Phase** controls the position of the waves. This parameter works with Ripple Speed to control the motion of the ripples as they move from the center. Ripple Speed controls the rate at which the waves move; Ripple Phase controls the position of the waves. In the example below you can see that the center of the ripples can be precisely positioned over the finger.




|  |  |
| --- | --- |
| [![rays_ripply.phasen35](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.phasen35.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.phasen35.jpg) | [![rays_ripply.phase125](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.phase125.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/rays_ripply.phase125.jpg) |
| Ripple Phase= -35 | Ripple Phase= 125 |


* Note: The Ripple Speed and Ripple Phase controls provide several ways to control the movement of your ripple over time.


* Leave **Ripple Phase** at its default setting and adjust **Ripple Speed**. Try this technique if you care about the overall motion but not about the exact number of waves created over the duration of the effect.
* To precisely control the point in the waveform at which the Ripple begins (for example, whether it begins at a peak or a trough), at the first frame of the effect adjust **Ripple Phase** until the wave is at the desired point. To control the number of waves that move out over the duration of the effect, set **Ripple Speed** to 0 and animate **Ripple Phase** to create movement. For example, suppose you want exactly five waves to form and disperse. At the first keyframe set **Ripple Phase** to 0. At the last keyframe, set **Ripple Phase** to *1800° (*5 x 360°). Exactly five full waves form over the duration of the effect.
* If you want a static (not animated) distortion, set **Ripple Speed** to 0 and do not animate**Ripple Phase.**


The **Light Source** position point sets the location of the simulated light source on the X and Y axis.


**Intensity** adjusts the intensity of the light source.


**Ray Length** controls the length of the rays of light that emanate from the source. Ray Length also affects controls in the Custom Look group if the Look menu is not set to Custom.


The **Ray Style menu** determines what type of rays are created. The choices are *Detailed* and *Fat.*Detailed produces rays that retain a great deal of detail as they spread from the Light Source. Fat produces less distinct rays. Fat Style produces rays similar to those produced by the Light Zoom filter.


The **Look menu** determines a look for the rays in the effect. The choices are *Default, Custom, Extended 1, Extended 2, Extended Bloom, Extend* and *Contract*,*Tight, Tight* *and Extend* and *Tight Bloom*. The Default setting gives the best look for each particular filter, so its effect varies from filter to filter. When Custom is chosen, you can use the controls in the Custom Look parameter group to finetune the rays. See “Custom Look Parameter Group” below.


 


**Custom Look Parameter Group**


The controls in the Custom Look parameter group allow you to customize and finetune the light rays precisely when the Look menu is set to Custom. If the Look menu is not set to Custom, these controls have no affect. The Default Look simply sets all of the Custom Look controls to their default values for the filter, so switching between Default and Custom has no affect until the Custom Look parameters are adjusted.


**Extend Rays** allows you to extends the rays by favoring light pixels over dark.


**Contract Rays** contracts the rays. While this may seem to be the opposite of Extend Rays, this parameter adjusts the algorithm differently, so increasing Contract Rays is not the same as decreasing Extend Rays.


**Holdout Radius** determines where the rays of light start in relation to the light source. Positive values create a circular region centered around the light source beyond which the rays emanate. Attenuation does not begin until after the radius is reached. Decreasing negative values cause the attenuation to start closer to the light source point.


The **Color menu** determines how the applied light affects the source image. You can also use this menu to preview the source channel used by the filter to create the effect.


* *Colorize* converts the light to colors using the controls in the Colorize Controls Parameter Group.
* *Image* produces a colored lighting effect using color information from the image that the filter is applied to.
* *Light* *Matte* uses the applied light to modify or create an alpha channel and displays a grayscale matte.
* *Inverse* *Light* *Matte* works similarly to Light Matte, but inverts the result.
* *Alpha* uses the applied light to modify or create an alpha channel and uses it to composite the source image.
* *View* *Source*displays the chosen Light From Channel (the source channel used by the filter to create the effect). This can be especially useful if you are using edges in the image as the Light From Channel.


The **Color Source Layer menu** sets the layer used when the Color menu is set to Image.


The **Color Preset menu**allows you to choose a Colorize preset (a gradient of up to six colors to tone the light rays). If the Mode menu is not set to Colorize, the presets have no affect.


The **Gradient** displays a preview of the gradient that you create.


 


**Gradient**


The BCC Gradient group enables complex, multi-color gradients for use in a variety of effect settings such as colorizing light sources.


For more information on the BCC Gradient tool, [Click Here](/documentation/continuum/bcc-gradient/ "Gradient").

The**Apply Mode menu** controls how the filter composites the applied light with the image.  For information on the available apply modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

 


**Composite Parameter Group**


This parameter group determine how the light is composited over the underlying image. These controls are only active when either Colorize or Use Source Color are chosen as the Light Mode menu.


**Source Threshold** subtracts the threshold from each pixel value when computing the light.


**Light Threshold** sets a value that is subtracted from the light at each pixel before it is applied. If you are animating the position of an object, increasing Light Threshold causes the light to fade out more rapidly as you move away from the source image.


**Source Opacity** adjusts the opacity of the source image in the final composite. Setting source Opacity to 0 has the same effect as setting Apply Mode to None.


**Light Opacity** controls the opacity of the light as it is composited over the source image. This parameter can be overdriven.


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* *Off* is the default. If Off is chosen, no deflickering will be done.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


The **Light From menu** determines which source color channel is used to create the light and to calculate the intensities of the source pixels. Pixels with higher values in the selected channel are considered to have higher intensities.


* *Luma, Red, Green, and Blue* use the corresponding color channel and multiply it by the source alpha channel.
* *Luma Inverse* uses the inverted luma channel to make the light.
* *Unmultiplied Luma* and *Alpha* use the unmodified corresponding source channels.
* *Luma Cartoon Edges* and *Alpha Cartoon Edges* find edges in the corresponding source channel, apply outlines to the edges, and use the resulting image. When Luma Cartoon Edges or Alpha Cartoon Edges is chosen,**Thickness/Intensity** adjusts the width of the outlined edges, and**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on.
* *Luma Edges* and *Alpha Edges* find edges in the corresponding source channel and use the resulting image. When Luma Edges or Alpha Edges is chosen, **Thickness/Intensity** adjusts the intensity of the edges, and **Edge Floor** adjusts the sensitivity of the filter when searching for edges in the source. Lower values increase sensitivity.
* When *PixelChooser* is chosen, the PixelChooser setting determines how the edges are created.


 


**Edges Parameter Group**


The Edges Parameter group provides additional control if either *Alpha Edges, Luma Edges, Alpha Cartoon Edge* or *Luma Cartoon Edges* is chosen in the Light From menu. If any of the other settings are chosen, the parameters in this section have no affect.


When the **Light From menu** is set to *Alpha Edge* o*r Luma Edges*, **Thickness/Intensity** controls the intensity of the edges. When the **Light From menu** is set to*Alpha Cartoon Edge* or *Luma Cartoon Edges*, **Thickness/Intensity** adjusts the thickness of the outside edges.


**Smooth Details** blurs the source image before the filter searches for edges. This blur does not appear in the output; it is used only in edge detection. This parameter only works if the **Light From menu** is set to *Luma Edges, Alpha Edges, Luma Cartoon Edges or Alpha Cartoon Edges*.


**Edge Bloom** blurs the edges before they are used to create the applied light. This parameter only works if the**Light From menu** is set to *Luma Edges, Alpha Edges, Luma Cartoon Edges or Alpha Cartoon Edges*. The following example shows Light from Luma Edges.


**Cartoon Threshold** sets the value in the threshold above which pixels are considered fully on. This parameter is only available if the**Light From menu** is set to*Luma Cartoon Edges or Alpha Cartoon Edges*.


 


**Texture Menu and Texture Controls Parameter Group**


These parameters allow you to set and finetune a light texture. The Texture menu and Texture Intensity control appear in a parameter group above the Texture Controls Parameter Group.


Two kinds of texture can be implemented, *Strings and Shimmer*.


The **Texture menu** allows you to select any combination of Shimmer and Strings. The options are *Strings, Contracted Strings, Shimmer, Shimmer and Strings, Shimmer and Contracted Strings and Off*. When Off is chosen, no texture is applied. The Shimmer controls create a texture that depends on the angle of the line from each point of the image to the light source. The Strings controls cause noise to affect the amount of attenuation the light rays experience as the emanate from the source and interact with the pixels they cross.


 


**No Texture Shimmer Strings**


**Texture Intensity** scales the selected textures. You can create a basic textured look by selecting one of the texture settings and adjusting its intensity. You can then finetune its look by adjusting the parameters in the Texture Controls Group.


**Stringiness** controls the intensity of the texture when the Texture menu is set to one of the Strings options.


**String Softness** controls the softness applied to the string texture.


**String Seed** determines the value input to the random number used by the filter to adjust the strings. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the strings.


**String Morph Rate** controls the rate at which the strings evolve over time. This parameter can be animated, so you can animate from evolving strings to static strings.


**Shimmer Intensity** controls the intensity of the texture when the Texture menu is set to one of the shimmer options.


**Shimmer Detail** adjusts the amount of detail in the shimmer.


**Shimmer Rotate** rotates the shimmer pattern.


**Shimmer Seed** determines the value input to the random number used by the filter to adjust the shimmer. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the shimmer.


**Shimmer Morph Rate** controls the rate at which the Shimmer pattern evolves over time.


**Expand Source %** allows you to expand the rays outside the outside edges of the image.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

The **PixelChooser Target menu** sets which parameters are affected by the PixelChooser.


* Choosing *Light* scales down the light level at each point in the effect.
* *Mix* makes the PixelChooser behave in the same way that it does in most filters – it mixes the original image with the filtered image.
* *Source* *Light* scales down the intensity of each pixel as it interacts with the rays crossing it, making the image darker.
* *Attenuation* scales the attenuation at each point where pixels are not fully chosen. This tends to make the rays shorter. You can stop the rays in an unchosen region and pick them up again in the chosen region.
* *Attenuation* *Boost* creates the reverse of Attenuation; rays travel further in unchosen regions.
* *Off* turns off these options.


 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 


