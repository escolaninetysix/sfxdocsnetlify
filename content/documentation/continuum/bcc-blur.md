{
"date": "2019-06-12",
"title": "BCC Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-blur/"
}

 

|  |  |  |
| --- | --- | --- |
| [![cherries.original1.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cherries.original1.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/cherries.original1.2.jpg) | [![blur.horizontal](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.horizontal.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.horizontal.jpg) | [![blur.vertical](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.vertical.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.vertical.jpg) |
| Source image | Horizontal Blur=60 | Vertical Blur=60 |


### Overview


Blur emulates the look of shooting in soft focus or with lens diffusion. This filter allows you to blur the horizontal and vertical components of the image independently.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them  with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


If the source image is opaque, selecting the **Opaque Source checkbox** can speed rendering and preview times. If your source is partially transparent, deselect this option for best results.


**Horizontal Blur** and **Vertical Blur** control the amount of blur in each direction. Increasing these values increases the amount of blur that is applied to the image. If **Lock Blur** is checked, Horizontal Blur sets the blur amount in both directions.


The **Avoid Clipping checkbox** allows you to render outside the source image. Note that this will cause the edges of an opaque image that is the full size of the project to become partly transparent (just as some hosts such as After Effects’ built-in blurs do). If this is selected, the filter always performs “Better” Alpha Blending.


Use the **Channels menu** to specify which channels to blur. You can blur all four channels (RGBA), just the RGB channels, just the *Alpha* channel, or any combination of the *Red, Green,* and *Blue* channels.




|  |  |  |
| --- | --- | --- |
| [![blur.red](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.red_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.red_.jpg) | [![blur.green](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.green_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.green_.jpg) | [![blur.blue](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.blue_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/blur.blue_.jpg) |
| Red channel blurred | Green channel blurred | Blue channel blurred |


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


* Interesting glow effects can be created by using the **Matte Channel menu** to blur pixels based on their *Lightness* or *Luma* channel values.
* Create a wipe between the source image and the blurred result by setting the **Region Type menu** to *Inside Rectangle*, then animating the center point of the rectangle so that one edge moves across the screen.
* Ghost image effects can be created by choosing pixels from another image or text layer using the **Matte Layer menu**. The blurred portion of the source image will take the shape of this second image or text.


The Channels menu and the PixelChooser give this blur a great deal of additional creative power and control. See Pixel Chooser Guide for more information.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 