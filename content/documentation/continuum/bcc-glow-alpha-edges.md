{
"date": "2019-06-12",
"title": "BCC Glow Alpha Edges",
"category": "BCC Stylize",
"link": "bcc-glow-alpha-edges/"
}

 

|  |  |
| --- | --- |
| [![Glow Alpha Edges Original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-Original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-Original.jpg) | [![Glow Alpha Edges Filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-Filtered.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-Filtered.jpg) |
| Original image | Filtered image |


### Overview


The BCC Glow Alpha Edges filter applies a glow that adheres closely to the contours of the image clip’s alpha channel or mask. This filter is designed for use with masks or images that have an alpha channel.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Width** controls the width of the stroke or glow that is generated.


**Softness** sets the amount of generated glow that is soft. Higher values create softer edges.


**Smoothness** determines the amount of post blur that is applied to the generated glow. Increasing this value makes the glow appear more blurred.


The **Apply** **Mode** **menu** controls how the glow is applied to the image. The default is set to Under so that the glow does not obscure the image clip. For more information about the Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/). However, the Glow Edges filter includes three additional Apply Mode parameters, *None, Under and Over.*

* *None* simply renders the glow and ignores the underlying image.
* *Under* renders the glow under the underlying image.
* *Over* renders the glow over the underlying image.




|  |  |  |
| --- | --- | --- |
| [![Glow Alpha Edges 1](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-1.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-1.jpg) | [![Glow Alpha Edges 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-2.jpg) | [![Glow Alpha Edges 3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Glow-Alpha-Edges-3.jpg) |
| Apply Mode=None | Apply Mode=Under | Apply Mode=Over |


Use **Color** to set the color of the glow. The default value is white.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image. At a value of 0, the image is unaffected by the filter.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 