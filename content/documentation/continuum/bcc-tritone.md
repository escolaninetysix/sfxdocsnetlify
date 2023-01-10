{
"date": "2019-06-12",
"title": "BCC Tritone",
"category": "BCC Color & Tone",
"link": "bcc-tritone/"
}

 

|  |  |
| --- | --- |
| [![levels.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/levels.original.jpg) | [![tritone.original1.2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original1.2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original1.2.jpg) |
| Source image | Filtered image |


### Overview


Tritone creates a toned image from the source image’s luma channel or any of its RGB channels. The Input Channel maps to a color range that goes from the Black Color to the Middle Color to the White Color. The default Tritone uses the source’s luma channel as the Input Channel to produce an image that is black where the source is black, white where the source is white, and blue-toned in the gray regions.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare Mode pop­up:** Controls what is displayed by the Compare Mode. The options are:


* *Off* shows the output of the filter.
* *Side By Side* the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide* operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-By-Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


**Black Color** is the output color for pixels whose Input Channel value is 0.


**Midpoint Color** is the output color for pixels whose Input Channel value is equal to the Midpoint value.


When the **Use Midpoint Color checkbox** is selected, the Midpoint Color is used, creating a tritone effect. When this option is deselected, a tint is created.


**White Color** is the output color for pixels whose Input Channel value is 255.


**Midpoint** is the Input Channel value for which the chosen Middle Color is output. The output color for pixels whose Input Channel value is less than Midpoint value is between the Black and Midpoint Colors. The output color for pixels whose Input Channel value is greater than Midpoint value is between the Midpoint and White Colors.




|  |  |  |
| --- | --- | --- |
| [![tritone.midpoint50](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.midpoint50.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.midpoint50.jpg) | [![tritone.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original2.jpg) | [![tritone.midpoint.200](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.midpoint.200.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.midpoint.200.jpg) |
| Midpoint=50 | Midpoint=125 | Midpoint=200 |


The **Input Channel menu** determines which channel is used as the source for the toned image. The choices are *Luma, Red, Green, Blue, Luma Inverse, Red Inverse, Green Inverse and Blue Inverse*.


The **Output Channels menu** sets the channels in the image that are processed by the filter. Use RGB for a normal toning effect, or experiment with other settings for more extreme color effects. The choices are *RGB, Red, Green, Blue, Red and Green, Red and Blue, Green and Blue, Difference, and Alpha.* Difference uses the difference between each filtered channel and the corresponding source channel.


**Repeats** changes the mapping from input to output. You can use Loops to create effects that combine toning with a solarized look.


The default Repeats value of 10 produces a normal toned image: black pixels are output as the Black Color, Midpoint pixels as the Middle Color, and white pixels as the White Color. Increasing the Repeats value causes the map to repeat. The output color for black input pixels is still the Black Color, but the color reaches white faster and then repeats. Increase this value to 20 to produce a solarized and toned effect, and increase it further to produce more extreme effects. Decrease it to fade the output toward the Black Color. 




|  |  |  |
| --- | --- | --- |
| [![tritone.original2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.original2.jpg) | [![tritone.loops20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.loops20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.loops20.jpg) | [![tritone.loops40](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.loops40.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.loops40.jpg) |
| Repeats=10 | Repeats=20 | Repeats=40 |


The **Repeat Mode menu** controls the type of map loop. *Back and Forth* causes the map to go from black to white to black to white. *Jump* causes the map to go from black to white and jump back to black. Jump almost always produces a very chaotic image.




|  |  |
| --- | --- |
| [![tritone.backforth](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.backforth.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.backforth.jpg) | [![tritone.jump](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.jump_.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/07/tritone.jump_.jpg) |
| Back and Forth | Jump |


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 