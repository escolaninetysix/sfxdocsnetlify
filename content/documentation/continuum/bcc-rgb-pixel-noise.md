{
"date": "2019-06-12",
"title": "BCC RGB Pixel Noise",
"category": "BCC Stylize",
"link": "bcc-rgb-pixel-noise/"
}

 

|  |  |
| --- | --- |
| [![mosaic.source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/mosaic.source.jpg) | [![rgbpixel](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbpixel.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/rgbpixel.jpg) |
| Source image | Filtered image |


### Overview


RGB Pixel noise applies noise to each of the RGB color channels independently. Alternately, you can use this filter to apply noise to the source image’s luminance channel without changing the pixels’ colors.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Percentage** sets the percentage of pixels affected by the noise.


Select the **Luma Noise checkbox** to apply noise to the source image’s luma channel without affect the source pixel colors. Leave this option deselected to apply noise to the RGB color channels.


If Luma Noise is not selected, **Red Noise, Green Noise**, and **Blue Noise** control the amount of noise applied to the affected pixels in each respective color channel. For example, if you set Red Noise to 100 and Blue and Green noise to 0, each affected pixel’s red channel is at the maximum, while the green and blue channels are left unchanged.


When the **Lock Noise Ratio checkbox** is on, the ratio between the amounts of noise in each channels is linked. If Red, Green, and Blue Noise are set to the same value, selecting Link Noise Ratio adds noise to the luminance channel. When the values are different, selecting this option adds bias, reducing the number of different colors appearing in affected pixels.


If Luma Noise is selected, the Red Noise, Green Noise, Blue Noise, and Link Noise Ratio controls are replaced by a single **Noise** parameter which sets the amount of noise applied to each affected pixel.


When the **Clipping/Clip Result Values checkbox** is selected, the noise and luminance values clip between 0 and 255. If this option is deselected, overflow creates a wrap, so that a pixel with a value of 256 wraps to 0, –1 wraps to 255, and so on. This creates a more incoherent look.


**Random Seed** determines which value is input to the random number generator used by the filter. Adjust this value when you like the overall effect but want to adjust the random configuration of the noise pattern.


* Note: Animating the Random Seed setting creates noise that varies from frame to frame, because the noise affects a different randomly chosen group of pixels in each consecutive frame. Keeping this setting at a constant value creates static noise that retains its appearance from frame to frame.


**Perturbation** and **Perturbation Seed** add a small amount of randomness to the numbers produced by Random Seed, allowing you to create noise patterns that differ from frame to frame by a controlled amount. The best way to do this is to animate Perturbation Seed. Make sure that it changes by at least one unit from one frame to the next, unless you want the noise pattern to be the same for some consecutive frames. Then adjust Perturbation until you get the desired amount of change.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 