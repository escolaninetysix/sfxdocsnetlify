{
"date": "2019-06-12",
"title": "BCC Glint",
"category": "BCC Lights",
"link": "bcc-glint/"
}

 

|  |  |
| --- | --- |
| [![glint.orig](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.orig_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.orig_.jpg) | [![glint.filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.filtered.jpg) |
| Source image | Filtered image |


### Overview


The Glint filter creates a sparkle or ray burst effect. A luminance map creates the glints based on bright areas in the image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Warning: You must have a supported OpenGL card and driver to use the BCC Glint filter.


**Glint Threshold** uses a luminance map to create glints based on a bright area in the image. A glint is created on any area with a luminance value above the specified Threshold. If you decrease this value, more glints are created; if you increase it, less glints are created.


**Glint Brightness** sets the brightness of the glints.


**Glint Scale** sets the scale of each glint.




|  |  |
| --- | --- |
| [![glint.scale1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.scale1_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.scale1_.jpg) | [![glint.scale2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.scale2_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.scale2_.jpg) |
| Glint Scale=1 | Glint Scale=2 |


**Glint Scale Aspect** adjusts the shape of the glints. Positive values stretch the glints horizontally, and negative values stretch them vertically.


**Glint Angle** sets the angle of the glints.


**Glint Color** sets the color of the glints.


The **Glint Shape menu** sets the shape of the glints.The choices are *Taper* and *Straight*. When Taper is chosen, the rays spread outward in the shape of a fan.




|  |  |
| --- | --- |
| [![glint.taper](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.taper_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.taper_.jpg) | [![glint.straight](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.straight.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glint.straight.jpg) |
| Taper | Straight |


**Glint Ray Width** and **Glint Ray Height** set the size of the rays on the X-axis and Y-axis.


**Glint Counts** determines the number of rays in the glint effect.




|  |  |
| --- | --- |
| [![glintcounts4](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintcounts4.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintcounts4.jpg) | [![glintcounts15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintcounts15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintcounts15.jpg) |
| Glint Counts=4 | Glint Counts=15 |


**Glint Scale Variance** varies the size of the rays. Increasing Size Variance increases the variety of sizes in the effect. Leaving this parameter at the default setting of 0 ensures that each ray uses the assigned Scale value.


**Glint Scale Seed** determines the value input to the random number used by the filter to change the size of the rays. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the sizes. If Glint Scale Variance is 0, this parameter has no affect.


**Glint Color Variance** varies the color of the rays. Increasing Glint Color Variance increases the variety of colors in the effect. Leaving this parameter at the default setting of 0 ensures that each ray uses the assigned Color value.


**Glint Color Seed** determines the value input to the random number used by the filter to change the color of the rays. Adjust this value when you like the overall appearance of the effect but want to change the random configuration of the colors. If Glint Color Variance is 0, this parameter has no affect.


**Glint Frequency** controls the amount of glints added in the effect. Increasing this value creates more glints.




|  |  |
| --- | --- |
| [![glintfreq23](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintfreq23.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintfreq23.jpg) | [![glintfreq80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintfreq80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/glintfreq80.jpg) |
| Glint Frequency=23 | Glint Frequency=80 |


If you apply the filter to a source that uses alpha, you will not see the background image composed with the source image through the alpha channel. To see the composition, choose the background layer from the **Glint Background Map Layer menu**.


**Glint Preserve Alpha** determines how the glints use alpha channel information. With Glint Preserve Alpha set to 0, Glints do not appear in areas governed by the alpha channel (in other words the Glint has zero opacity in alpha areas), with the Preserve Alpha parameter set to 100, the Glint is 100% opaque over the alpha channel.


* Warning: If your source image includes an alpha channel (for example a logo over a background image), in order to see the the background image composited with the source image, you need to set a background layer in the Glint Background Map Layer menu.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 