{
"date": "2019-06-12",
"title": "BCC Pyramid Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-pyramid-blur/"
}

 

|  |  |
| --- | --- |
| [![bccfastbluroff](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastbluroff.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastbluroff.jpg) | [![bccfastbluron](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastbluron.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastbluron.jpg) |
| Original Image | Filtered Image |


### Overview


The BCC Pyramid Blur filter emulates the look of shooting in soft focus or with lens diffusion. This filter allows you to blur the horizontal and vertical components of the image separately. The functionality is similar to the BCC Blur filter. However, BCC Pyramid Blur uses a refined algorithm that speeds rendering approximately 20 – 40 percent. When you create new blur effects, you should use this filter. To maintain compatibility with existing BCC settings, use the BCC Blur filter.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare****Mode****po****p****-­up:**Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right**Offset*provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


The **Blur Quality menu**sets the quality of the blur. The choices are *Fastest, Balanced* or *Smoothest*. Image quality and render speed will vary according to this choice. Smoothest provides the best image quality while Fastest provides the fastest render times.


If the **Lock Blur checkbox** is selected, Blur sets the blur in both directions.


**Blur** and **Vertical Blur** control the amount of blur in each direction. Increasing these values increases the amount of blur that is applied to the image.




|  |  |  |
| --- | --- | --- |
| [![bccfastblurhoriz100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurhoriz100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurhoriz100.jpg) | [![bccfastblurvert100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurvert100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurvert100.jpg) | [![bccfastblurlock100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurlock100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/bccfastblurlock100.jpg) |
| Horizontal Blur=100 | Vertical Blur=100 | Horiz and Vert Blur=100 |


When the **Blur Alpha checkbox** is selected (the default), the blur applies to the RGBA channels. When this checkbox is deselected, the alpha channel is not affected by the blur. If the image you are blurring does not include an alpha channel, this checkbox has no effect.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


**Mirror Edge:**Enabling this checkbox makes the edges of the blur mirror each other.


 


**Motion Tracker**


The BCC Motion Tracker allows you to track the motion of an object, then use the motion path to drive other geometric properties of the effect without the need for keyframing.


For more information on the Motion Tracker, [Click Here](/documentation/continuum/bcc-motion-tracker/).

If you are using the controls in the PixelChooser parameter group, the **Apply PixelChooser menu** determines when the PixelChooser controls are applied to the blurred image.


* Choose *Post-Effect* for the PixelChooser to affect the image before the blur is applied.
* Choose *Pre-Effect* for the PixelChooser to affect the image after the blur is applied.
* Choose *Both* for the PixelChooser to affect the image both before and after the blur is applied.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 