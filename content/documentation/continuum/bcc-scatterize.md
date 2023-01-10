{
"date": "2019-06-12",
"title": "BCC Scatterize",
"category": "BCC Stylize",
"link": "bcc-scatterize/"
}

 [![ScatterizeAft](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ScatterizeAft.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/ScatterizeAft.jpg)


### Overview


Scatterize shuffles the pixels in the source image, creating a scattered effect.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Variance** determines how scattered the image is and works in conjunction with the Scatter Percentage parameter.




|  |  |  |
| --- | --- | --- |
| [![rgbblend.redmix.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbblend.redmix.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbblend.redmix.0.jpg) | [![scatterize.variance10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.variance10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.variance10.jpg) | [![scatterize.variance30](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.variance30.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.variance30.jpg) |
| Variance=0 | Variance=10 | Variance=30 |


**Scatter Percentage** determines the percentage of the pixels in the image that scatter. Adjusting this parameter allows you to scatter an image while leaving its basic shape intact.




|  |  |  |
| --- | --- | --- |
| [![scatterize.percent20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent20.jpg) | [![scatterize.percent50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent50.jpg) | [![scatterize.percent80](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent80.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.percent80.jpg) |
| Scatter Percentage=20 | Scatter Percentage=50 | Scatter Percentage=80 |


The **Style menu** setting determines which type of scattering occurs in the effect.


* *Uncontrolled* scatters the pixels in random directions.
* *Directional* scatters the pixels along a straight line (in both directions). Use the **Direction Angle** control to set the angle between this line and the horizontal axis.
* *Radial* scatters pixels outward from a point set by the **Center** **Point** settings.




|  |  |  |
| --- | --- | --- |
| [![scatterize.normal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.normal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.normal.jpg) | [![scatterize.directional](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.directional.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.directional.jpg) | [![scatterize.radial](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.radial.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/scatterize.radial.jpg) |
| Uncontrolled | Directional | Radial |


The **Center Point** position controls set the center point for the effect on the X and Y axis.


The **Algorithm menu** specifies how the pixels scatter.


* *No Bias* scatters the entire image equally.
* *Center Bias* scatters the image more in the center than at the edges.
* *Subtle Algorithm* uses an algorithm which animates better but takes longer to render.  This option also scales down Variance to some extent, so you should adjust Variance after choosing this option.


When the **Randomize checkbox** is selected, the effect auto-animates, producing a constantly shifting array of scattered pixels. Deselect this option to create a static effect, or to manually animate the effect.


When the **Avoid Clipping checkbox** is enabled, the scatterized effect expands outside the borders of the original source. The **PixelChooser** is disabled if Avoid Clipping is selected.


**Random Seed** determines which value is input to the random number generator used by the filter. Adjust this setting when you like the overall effect, but want to change the random configuration of the pixels.


* Note: Animating Random Seed produces a different random pattern of pixels in each consecutive frame. Keeping this setting at a constant value creates static noise that retains its appearance from frame to frame.


The **Apply Mode** menu controls how the filtered image is composited with the source image.  For descriptions of all the available Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** controls the mix of the specified Apply Mode with the Normal apply mode. If the Apply Mode is Normal, Apply Mix has no affect and the parameter does not appear. If Apply Mix is 0, Apply Mode has no affect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 