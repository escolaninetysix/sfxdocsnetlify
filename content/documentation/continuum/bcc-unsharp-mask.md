{
"date": "2019-06-12",
"title": "BCC Unsharp Mask",
"category": "BCC Blur & Sharpen",
"link": "bcc-unsharp-mask/"
}

 

|  |  |
| --- | --- |
| [![cherries.original1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cherries.original11.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cherries.original11.jpg) | [![unsharp.amount.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.25.jpg) |
| Source Image | Filtered Image |


### Overview


The Unsharp Mask filter uses a classic image sharpening technique similar to the method used to sharpen film images. The source image is blurred, and the blurred image is then subtracted from the source. The resulting image is sharper and has more contrast. Unsharp Mask sharpens areas in an image with significant color changes by adjusting the contrast of edge details to create the illusion of image sharpness. This filter is useful for refocusing an image that appears blurry due to scanning, poor lighting, or other factors.


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


 


**Radius** sets the radius of the intermediate blur that is subtracted in order to produce the sharpened image. Increasing the Radius of the blur sharpens the image to a greater degree and creates more contrast. Extreme settings can create artificial halos around image details.




|  |  |
| --- | --- |
| [![unsharp.radius.50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.radius.50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.radius.50.jpg) | [![unsharp.radius.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.radius.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.radius.100.jpg) |
| Radius=50 | Radius=100 |


**Amount** controls the amount of blur applied to the image in the sharpening process. Increasing the Amount value increases sharpness.




|  |  |
| --- | --- |
| [![unsharp.amount.25](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.25.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.25.jpg) | [![unsharp.amount.100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.100.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/unsharp.amount.100.jpg) |
| Amount=25 | Amount=100 |


**Threshold** reduces the change in each pixel by a set value between 0 and 255. Pixels whose value would change by less than the threshold setting are not changed at all.


The **Output Channels** **menu** specifies which channels are processed by the filter. You can blur all four channels (*RGBA*), just the *RGB* channels, just the *Alpha* channel, or any combination of the *Red, Green*, and *Blue* channels.


Many hosts process media one field at a time which can cause flickering to occur on filtered effects. The **Reduce Flicker menu** allows you to reduce flicker in the rendered image. The only way to evaluate a deflicker setting is to render and play back the effect on an NTSC monitor. Choose from the following options in the Reduce Flicker menu.


* *1-2-1* mixes each pixel with the pixels above and below it, with the input pixel getting twice the weight as the ones above and below. For After Effects users, this works the same as applying the AE Reduce Flicker filter at a setting of 0.5.
* *2-3-2* provides more softening than 1-2-1.
* *1-1-1* provides the most softening for effects that still contain flicker with the above options.
* *Off* is the default. If Off is chosen, no deflickering will be done.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered images without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

* Note: Unsharp Mask’s PixelChooser has one additional parameter, **Controls.** This menu determines whether the PixelChooser scales back the effect by reducing *Amount*, increasing *Threshold*, or both *Amount & Threshold*.


