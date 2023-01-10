{
"date": "2019-06-12",
"title": "BCC Temporal Blur",
"category": "BCC Time",
"link": "bcc-temporal-blur/"
}

 

|  |  |
| --- | --- |
| [![temp.blur.before](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.before.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.before.jpg) | [![temp.blur.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg) |
| Source image | Filtered image |


### Overview


Temporal Blur blurs the image over time by averaging two or more source frames to produce each output frame. This filter includes a PixelChooser, which allows you to selectively blur only a portion of the source image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


* Warning: You can apply the Temporal Blur filter directly to the clip that you want to filter; however, the duration of the effect is then limited to the duration of the filtered clip. To create an effect that is longer than the duration of the source media, follow the steps described in the BCC Velocity Remap filter.


**Amount (Frames)** sets the width of the blur in frames. For example, if Amount is set to 5, the current frame is averaged with the following five frames to produce the output frame.




|  |  |
| --- | --- |
| [![temp.blur.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg) | [![temp.blur.amount.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg) |
| Amount=1.0 | Amount=3.0 |


Selecting the **Lock to Whole Frames checkbox** locks the Amount value to a whole number of frames, which prevents partial frames from being averaged into the output. Selecting this option can improve render time and may produce a cleaner output if you want the blur to render only a few distinct frames.


* Note: If Amount is animated, Lock to Whole Frames will cause jumps in the animation.


**Frame Separation** sets the separation between the frames that are averaged in the blur computation. For example, if Frame Separation is set to 3, then the render for each frame uses the current frame averaged with every third frame thereafter (therefore, the render for frame 0 would average frames 0, 3, 6, and so on).




|  |  |
| --- | --- |
| [![temp.blur.amount.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg) | [![temp.blur.separation.3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.separation.3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.separation.3.jpg) |
| Frame Separation=1 | Frame Separation=3 |


**Frame Offset** offsets the source image used to create the blur at the current time position. For example, if Frame Offset is 10, Frame 10 is used to compute the blur output at Frame 0.


* Note: Try using Mix with Original with Frame Offset to produce an effect in which the blur is offset from the source image. In the examples below, Frame Offset is set to –6, so the blurred image lags 6 frames behind the source.




|  |  |
| --- | --- |
| [![temp.blur.offset.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.0.jpg) | [![temp.blur.offset.6](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.6.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.6.jpg) |
| Frame Offset=0 | Frame Offset= -6 |


The **Blur Direction menu** chooses which frames are used to compute the blur for the source frame.


* *Bidirectional* blurs the source frame with both the preceding and following frames to produce the blurred output.




|  |
| --- |
| [![temp.blur.bi](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.bi_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.bi_.jpg) |


* *Later Frames* blurs the source frame with the following frames to produce the blurred output.




|  |
| --- |
| [![temp.blur.later](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.later_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.later_.jpg) |


* *Earlier Frames* blurs the source frame with the preceding frames to produce the blurred output.




|  |
| --- |
| [![temp.blur.earlier](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.earlier.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.earlier.jpg) |


The **Blur Shape menu** sets the shape of the blur over time.


* *Gaussian* gives the most “weight” (prominence in the averaged output) to the source frame and less weight to frames further from the source in time to compute the blur.
* *Flat* gives an equal amount of weight to each frame used to compute the blur.




|  |  |
| --- | --- |
| [![temp.blur.flat](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.flat_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.flat_.jpg) | [![temp.blur.gaussian](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.gaussian.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.gaussian.jpg) |
| Blur Shape=Gaussian | Blur Shape=Flat |


When Blur Shape is Gaussian, **Blur Falloff** determines the number of frames that are added to the Amount value in computing the Blur. When Blur Falloff is 0, the effect uses only the frames specified by the Amount value. Increasing Blur Falloff averages additional frames in the blur, creating a softer blur. This parameter has no affect if Blur Shape is set to Flat.




|  |  |
| --- | --- |
| [![temp.blur.flat](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.flat_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.flat_.jpg) | [![temp.blur.falloff.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.falloff.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.falloff.50.jpg) |
| Blur Falloff=0 | Blur Falloff=50 |


* Warning: Increasing Blur Falloff increases rendering time. Also, animating Blur Falloff may produce jumps in the effect.


**Spread** determines how frames used in computing the blur are weighted when using the Gaussian Blur Shape. Increasing Spread weights frames that are farther away in time from the source frame, adding less weight to frames close to the source frame. This parameter has no affect if the Blur Shape menu is set to Flat.


**Blur Threshold** reduces the effect of the blur using the following method. First, the filter compares each blurred channel with the corresponding source channel. If the difference between the two is less than the Blur Threshold value, the source channel is used in the output and is not affected by the blur. If the difference is greater than the Blur Threshold value, the filter reduces the difference by the Blur Threshold value before outputting the channel.




|  |  |
| --- | --- |
| [![temp.blur.after](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.after_.jpg) | [![temp.blur.offset.0](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.0.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.offset.0.jpg) |
| Blur Threshold=0 | Blur Threshold=25 |


The Bias parameters weighs pixels based on their channel values or contrast level.


The **Bias Type menu** sets the type of bias used in weighting pixels.


* *Channel* weights pixels according to their channel values. If Bias Type is set to Channel, increasing positive Bias Amount values add more weight to pixels whose Bias Channel values are the highest. Decreasing negative values add more weight to pixels whose Bias Channel values are lowest.
* *Contrast* weights pixels based on the difference between their channel values and 128 (the midpoint between 0 and 255). If Bias Type is set to Contrast, increasing positive Bias Amount values add weight to pixels whose Bias Channel value are furthest from 128 (closest to 0 and 255). Decreasing negative values add more weight to pixels whose Bias Channel values are closest to 128.
* *Off* weights all pixels equally, so no bias is applied. When Bias Type is set to Off, Bias Channel and Bias Amount have no effect.


The **Bias Channel menu** sets the channel whose values are used in weighting pixels. The choices are *Luma, Alpha, Red, Green, and Blue*.


**Bias Amount:** determines the amount of channel and contrast applied to pixels.


The **Apply Mode menu** sets the apply mode used to composite the blurred output over the original source media.  For descriptions of all the Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).

**Apply Mix** blends the Apply Mode setting with the **Apply Mix From menu** setting. The resulting mixed mode is used to composite the output over the original source media. For example, if Apply Mode is set to Lighten and Apply Mix From is set to *Normal*, then Apply Mix blends the Lighten and Normal apply modes. In this case, an Apply Mix setting of 0 uses the Normal apply mode, and an Apply Mix setting of 100 uses the Lighten apply mode. An Apply Mix setting of 50 blends the two apply modes equally.


* Note: You can use Apply Mix to soften the effect of a given apply mode, or to animate from one apply mode to another over time.


**Mix with Original** blends the filtered output with the original source image. Use this parameter to scale or animate the effect of the filter without adjusting individual parameters.




|  |  |
| --- | --- |
| [![temp.blur.amount.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.amount.2.jpg) | [![temp.blur.mixoriginal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.mixoriginal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/temp.blur_.mixoriginal.jpg) |
| Mix with Original=0 | Mix with Original=30 |


If you are using the controls in the PixelChooser parameter group, the **Apply PixelChooser menu** determines when the PixelChooser controls are applied to the blurred image.


* Choose *Post-Effect* for the PixelChooser to affect the image before the blur is applied.
* Choose *Pre-Effect* for the PixelChooser to affect the image after the blur is applied.
* Choose *Both* for the PixelChooser to affect the image both before and after the blur is applied.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 