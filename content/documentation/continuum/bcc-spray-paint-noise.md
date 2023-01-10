{
"date": "2019-06-12",
"title": "BCC Spray Paint Noise",
"category": "BCC Art Looks",
"link": "bcc-spray-paint-noise/"
}

 

|  |  |
| --- | --- |
| [![mosaic.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg) | [![spraypaint](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.jpg) |
| Source image | Filtered image |


### Overview


Spray Paint Noise applies a flat spray paint color to the image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Percentage** sets the percentage of pixels affected by the noise.


**Paint Color** controls the color of the applied paint.


You can use the **Paint Layer menu** to paint on any layer or track in the composition. Choose *None* to use the chosen Paint Color.




|  |  |  |
| --- | --- | --- |
| [![paintlayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/paintlayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/paintlayer.jpg) | [![spraypaint.nolayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.nolayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.nolayer.jpg) | [![spraypaint.paintlayer](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.paintlayer.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/spraypaint.paintlayer.jpg) |
| “Flower.pct” layer | Paint Layer=None | Paint Layer=Flower.pct |


**Minimum Opacity** sets the minimum opacity of the paint in each affected pixel.


**Maximum Opacity** sets the maximum opacity of the paint in each affected pixel.


* Note: If the Minimum and Maximum Opacity values differ, a random number is used to choose the opacity from the specified range. If the Minimum Opacity value is greater than the Maximum Opacity value, the Maximum Opacity value is used. If Pixel Percentage is 100, and Minimum and Maximum opacity are both set to 100, the entire image is covered by the paint color.


**Apply Mode** controls how the filtered image is composited with the source image.  For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Noise Seed** determines which value is input to the random number generator used by the filter. Adjust this value when you like the overall effect but want to adjust the random configuration of the noise pattern.


* Note: Animating Noise Seed creates noise that varies between frames, because the noise affects a different randomly chosen group of pixels in each consecutive frame. Keeping this setting at a constant value creates static noise.


**Perturbation** and **Perturbation Seed** add a small amount of randomness to the numbers produced by Noise Seed, allowing you to create noise patterns that differ from frame to frame by a controlled amount. Animate Perturbation Seed by at least one unit from one frame to the next, unless you want the noise pattern to remain the same for some consecutive frames. Then adjust Perturbation until you get the desired amount of change.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 