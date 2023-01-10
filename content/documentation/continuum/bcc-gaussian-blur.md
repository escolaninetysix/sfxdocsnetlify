{
"date": "2019-06-12",
"title": "BCC Gaussian Blur",
"category": "BCC Blur & Sharpen",
"link": "bcc-gaussian-blur/"
}

 

|  |  |
| --- | --- |
| [![Gaussian source](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-source.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-source.png) | [![Gaussian source filtered](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-source-filtered.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-source-filtered.png) |
| Source | Filtered |


### Overview


The Gaussian Blur filter implements a popular blur algorithm that produces smoother blurs but takes more time to render than the Basic Blur filter. Gaussian Blur softens the image by averaging each pixel with its neighboring pixels. The word “Gaussian” refers to the bell- shaped curve commonly used in statistical analysis. The shape of this curve determines how much each averaged pixel contributes to the output.


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


 


If the source image is opaque, selecting the **Opaque Source checkbox** can speed rendering and preview times. If your source is partially transparent, deselect this option for best results.


**Horizontal Blur** and **Vertical Blur** control the amount of blur in each direction. If **Lock Blur**is selected, Horizontal Blur sets the blur amount in both directions.


**Spread** adjusts the blur computation to create multiple image effects. At the default setting of 0, the input image at each pixel contributes the most “weight” to the output for that pixel. Increasing Spread modifies the computation to give more weight to points away from the center and less weight to points close to the center. This produces a double vision effect.




|  |  |
| --- | --- |
| [![Gaussian spread 50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-spread-50.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-spread-50.png) | [![Gaussian spread 100](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-spread-100.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-spread-100.png) |
| Spread=50 | Spread=100 |


**Blur Threshold** reduces the amount of color change to each pixel by the threshold amount. Increasing Blur Threshold causes the parts of the image with abrupt changes in color to blur, while areas with subtle details remain unchanged.


**Maximum Deviation** sets the maximum deviation (based on 8 bit color) allowed for any channel. Reducing this value limits the amount a color can change. This becomes more noticeable at values below 30. Very small values of Maximum Deviation can be useful (especially combined with the PixelChooser) to reduce noise in video and digital stills.


The **Avoid Clipping checkbox** allows you to render outside the source image. This will cause the edges of an opaque image that is the full size of the project to become partly transparent (just as some hosts such as After Effects’ built-in blurs do). If this box is selected, the filter always uses Better Alpha Blending.


The **Blur** **Quality** **menu** controls the quality of the blur. *Pyramid* is the fastest option and is generally adequate. It produces a blur similar in quality to the Pyramid Blur filter. *Pyramid* *Smoother* produces a better quality pyramid blur and increases rendering times slightly. The remaining choices, *Gaussian Low, Gaussian Medium, Gaussian High, Gaussian Higher*, and *Gaussian* *Highest* produce gaussian blurs of increasing quality. These options increase rendering times proportionately.


**Iterations** determines the number of times the blur is applied to the image. Increasing Iterations produces smoother blurs but increases render and preview time.




|  |  |
| --- | --- |
| [![Gaussian Iterations 2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-Iterations-2.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-Iterations-2.png) | [![Gaussian Iterations 10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-Iterations-10.png)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/Gaussian-Iterations-10.png) |
| Iterations=2 | Iterations=10 |


The **Apply** **Mode** **menu** controls how the filtered image is composited with the source image.


* For descriptions of all the possible Apply Modes, [Click Here](/documentation/continuum/bcc-apply-modes/).


 **Apply Mix** controls the mix of the specified Apply Mode with the *Normal* apply mode. If the Apply Mode is Normal, Apply Mix has no effect. If Apply Mix is 0, Apply Mode has no effect. Increase Apply Mix to blend the Apply Mode setting with the Normal apply mode.


The **Channels** **menu** specifies which channels are blurred. You can blur all four channels (*RGBA*), just the *RGB* channels, just the *Alpha* channel, or any combination of the *Red, Green*, and *Blue* channels.


**Mix with Original** blends the source and filtered images. Use this parameter to animate from the unfiltered to the filtered image without adjusting other settings, or to reduce the affect of the filter by mixing it with the source image.


If you are using the controls in the PixelChooser parameter group, the **Apply PixelChooser menu** determines when the PixelChooser controls are applied to the blurred image.


* Choose *Post-Effect* for the PixelChooser to affect the image before the blur is applied.
* Choose *Pre-Effect* for the PixelChooser to affect the image after the blur is applied.
* Choose *Both* for the PixelChooser to affect the image both before and after the blur is applied.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 


**Beat Reactor**


The BCC Beat Reactor is an animation control suite which drives effect properties based on the contents of an audio track. This lets you seamlessly tie visual FX to an audio soundtrack without the need for ANY manual keyframing.


For more information on the Beat Reactor, [Click Here](/documentation/continuum/bcc-beat-reactor-integrated/).

 