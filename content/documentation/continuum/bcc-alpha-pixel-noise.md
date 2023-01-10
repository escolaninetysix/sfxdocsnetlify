{
"date": "2019-06-12",
"title": "BCC Alpha Pixel Noise",
"category": "BCC Obsolete",
"link": "bcc-alpha-pixel-noise/"
}

 

|  |  |  |
| --- | --- | --- |
| [![alphapixel.transition1l](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition1l.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition1l.jpg) | [![alphapixel.transition2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition2.jpg) | [![alphapixel.transition3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.transition3.jpg) |
| Time 00:00:01:00 | Time 00:00:02:00 | Time 00:00:03:00 |


### Overview


Alpha Pixel Noise adds noise to an image’s alpha channel. You can use this filter to create pixelated transitions between two images.


### 


### **Parameter Controls**


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Percentage** sets the percentage of pixels affected by the noise.


**Alpha Offset** adds or subtracts a fixed value to the alpha channel of each pixel affected by the noise. Use Alpha Offset to make the same change to each affected pixel. Set Alpha Offset to –255 and Noise to 0 to make each affected pixel completely transparent, or Alpha Offset to 255 and Noise to 0 to make each affected pixel completely opaque. You can animate these settings to create noise transitions.


**Noise** sets the amount of noise applied to each affected pixel. When Alpha Offset is 0, a Noise value of 0 applies no noise to any pixel, leaving the image’s alpha channel unchanged. A Noise value of 100 makes all affected pixels completely transparent.


The **Action menu** determines how the alpha channel is altered in each affected pixel.


* *Transparency* decreases opacity in the affected pixels. Choose Increase Transparency if the source image is completely opaque.
* *Opacity* increases opacity in the affected pixels. Choose Increase Opacity if the source image is fully transparent.
* *Both* increases opacity in affected pixels that are transparent and decreases opacity in affected pixels that are opaque. Choose Both if the source image contains both transparent and opaque regions and you want to add noise to both regions




|  |  |  |
| --- | --- | --- |
| [![alphapixel.opacityminus](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.opacityminus.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.opacityminus.jpg) | [![alphapixel.opacityplus](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.opacityplus.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.opacityplus.jpg) | [![alphapixel.bothl](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.bothl_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/alphapixel.bothl_.jpg) |
| Transparency | Opacity | Both |


**Random Seed** determines the value input to the random number generator used by the filter. Adjust this value when you like the overall effect but want to adjust the random configuration of the noise pattern.


* **Note**: Animating Random Seed creates noise that varies from frame to frame, because the noise affects a different randomly chosen group of pixels in each consecutive frame. Keeping this setting at a constant value creates static noise


**Perturbation** and **Perturbation Seed** add a small amount of randomness to the numbers produced by Random Seed, allowing you to create noise patterns that differ from frame to frame by a controlled amount. The best way to do this is to make sure that Perturbation Seed changes by at least one unit from one frame to the next, unless you want the noise pattern to be the same for some consecutive frames. Then adjust Perturbation until you get the desired amount of change.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 