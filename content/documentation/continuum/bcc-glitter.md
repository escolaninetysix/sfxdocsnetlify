{
"date": "2019-06-12",
"title": "BCC Glitter",
"category": "BCC Lights",
"link": "bcc-glitter/"
}

 

|  |  |
| --- | --- |
| [![glitter.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.original.jpg) | [![glitter.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.filtered.jpg) |
| Source image | Filtered image |


### Overview


The Glitter filter creates a glittering or sparkling light effect.
### Function


**Presets and Common Controls**

BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.

BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.

For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).* Warning: You must have a supported OpenGL card and driver to use the BCC Glint filter.


**Glitter Frequency** controls the amount of glitter added in the effect. Increasing this value creates more glitter.

**Glitter Pattern Seed** determines the value input to the random number used by the filter to change the pattern of the glitter. Adjust this value when you like the overall appearance of the effect but want to change the random configuration.

**Glitter Brightness** sets the brightness of the glitter.

**Glitter Scale** sets the scale of the glitter.


|  |  |
| --- | --- |
| [![glitterscale.75](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitterscale.75.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitterscale.75.jpg) | [![glitterscale2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitterscale2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitterscale2.jpg) |
| Glitter Scale=.75 | Glitter Scale=2 |


**Glitter Scale Aspect** adjusts the shape of the glitter. Positive values stretch the glitter horizontally, and negative values stretch it vertically.
**Glitter Angle** sets the angle of the glitter.

**Glitter Ray Color** sets the color of the rays in the glitter.

The **Glitter Ray Shape menu** sets the shape of the rays in the effect.The choices are *Taper* and *Straight*. When Taper is chosen, the rays spread outward in the shape of a fan.


|  |  |
| --- | --- |
| [![glitter.taper](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.taper_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.taper_.jpg) | [![glitter.straight](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.straight.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.straight.jpg) |
| Taper | Straight |


**Glitter Ray Width** and **Glitter Ray Height** set the size of the rays on the X-axis and Y-axis respectively.
**Glitter Ray Counts** determines the number of rays in the effect.


|  |  |  |
| --- | --- | --- |
| [![glitter.raycounts6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts6.jpg) | [![glitter.raycounts15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts15.jpg) | [![glitter.raycounts100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glitter.raycounts100.jpg) |
| Glitter Ray Counts=6 | Glitter Ray Counts=15 | Glitter Ray Counts=100 |


**Glitter Ray Scale Variance** varies the size of the rays. Increasing Size Variance increases the variety of sizes in the effect. Leaving this parameter at the default setting of 0 ensures that each ray uses the assigned Scale value.
**Glitter Ray Scale Seed** determines the value input to the random number used by the filter to change the size of the rays. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the sizes. If Glitter Scale Variance is 0, this parameter has no affect.

**Glitter Ray Color Variance** varies the color of the rays. Increasing Glitter Color Variance increases the variety of colors in the effect. Leaving this parameter at the default setting of 0 ensures that each ray uses the assigned Glitter Ray Color value.

**Glitter Ray Color Seed** determines the value input to the random number used by the filter to change the color of the rays. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the colors. If Glitter Color Variance is 0, this parameter has no affect.

The **Glitter Offset** position controls offset the glitter on the X and Y axis.

**Glitter Speed X** and **Glitter Speed Y** adjust the rate at which glitter moves on the X-axis and Y-axis respectively. Increasing positive values move the glitter faster. Decreasing negative values slow the glitter.
**Glittering Speed** determines how quickly the brightness of the glitter changes. Higher values cause the brightness to change more quickly, producing rapid glittering.

If you apply the filter to a source that uses alpha, you will not see the background image composed with the source image through the alpha channel. To see the composition, choose the background layer from the **Glitter Background Map Layer menu**.

**Glitter Preserve Alpha** determines how the glitter uses alpha channel information. With Glitter Preserve Alpha set to 0, glitter does not appear in areas governed by the alpha channel (in other words the effect has zero opacity in alpha areas); with the Glitter Preserve Alpha parameter set to 100, the glitter is 100% opaque over the alpha channel.
* Warning: If your source image includes an alpha channel (for example a logo over a background image), in order to see the the background image composited with the source image, you need to set a background layer in the Glitter Background Map Layer menu.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.



**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask.

 

For more information on the PixelChooser, [Click Here.](/documentation/continuum/)
**Beat Reactor**

The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.

For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/). 