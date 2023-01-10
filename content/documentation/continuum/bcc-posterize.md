{
"date": "2019-06-12",
"title": "BCC Posterize",
"category": "BCC Art Looks",
"link": "bcc-posterize/"
}

 

|  |  |  |
| --- | --- | --- |
| [![posterize.levels2](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels2.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels2.jpg) | [![posterize.levels3](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels3.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels3.jpg) | [![posterize.levels5](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels5.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.levels5.jpg) |
| RGB Levels=2 | RGB Levels=3 | RGB Levels=5 |


### Overview


Posterize reduces the number of colors in the image by independently reducing the number of discrete levels in each color channel. The resulting output image has a few distinct values of red, green, and blue, instead of having each value spread over the full range of 0 to 255. The filter also allows you to scramble the output values for additional creative control.


Posterization effects can produce hard edges that give the output image a rough appearance, which can be exacerbated by image compression and by the bandwidth limitations of analog video equipment. The Posterize filter provides several controls that deal with such problems by blurring and softening the posterized image.


### Function


**Presets and Common Controls**


BCC filters come with a library of factory installed presets plus the ability to create your own custom presets and preview them with the BCC FX Browser™.


BCC filters also include common controls that configure global effect preferences and other host-specific effect settings.


For more information about working with presets and other common controls, [Click Here](/documentation/continuum/bcc-common-controls/).

 


**Compare Mode**


The BCC Compare Mode provides a convenient mechanism to compare the effect result with the original source layer. It provides several variations on basic split-screen views with the filtered clip placed next to the unedited original.


For more information on the Compare Mode,[Click Here](/documentation/continuum/bcc-compare-mode/).

**Compare Mode pop­up:** Controls what is displayed by the Compare Mode. The options are:


* *Off*shows the output of the filter.
* **Side By**Side*the left side of the output shows half of the incoming image, and the right side shows the same half of the image as processed by the filter. When in Side-by-Side mode, the corresponding Slide and Right Offset sliders become available.Wipe*enables the user to interactively wipe the effect across the image. The left side of the wipe bar on the image output shows the unfiltered image, while the right side of the wipe bar shows the filtered result. When in Wipe mode, the corresponding Wipe slider becomes available.
* *Wipe/Slide*operates as a Wipe function when Wipe is selected in Compare Mode, and as a Slide function when Side-­‐By-­‐Side is selected in Compare Mode. When in Wipe mode, adjustments to this parameter moves the vertical wipe bar across the image; the region on the left of the wipe bar shows the original unfiltered image, while the region on the right shows the filtered result. When in Slide mode, adjustments to this parameter pans the image in the viewer window, maintaining the spatial relationship in the viewer between the before and after images.
* *Right Offset* provides a way to adjust the spatial relationship between the unfiltered original image and the filtered result in the viewer window. Adjustments to this parameter will offset the position of the filtered image in the viewer.


 


If the **Lock Level Count checkbox** is selected, adjusting the Red Levels sets all the **Levels**parameters. Deselect this checkbox to adjust levels accordingly.


The **Levels** controls determine the number of distinct levels present in the **Red, Green**, and **Blue** channels in the filter’s output. For example, if Red Levels is 5, the red channel can have only five distinct values. If Level Bias is at its default setting, these values are 0, 64, 127, 191, and 255. The red channel in each pixel changes to the Red Level value that is closest to its original value.


**Red**, **Green** and **Blue** **Bias** adds bias to the set of discrete levels present in the **Red, Green**, and **Blue** channels in the filter’s output, and are useful for adjusting the look of the posterized output. Positive values push the levels toward white, and negative values push them toward black.


**Red, Green** and **Blue** **Soften** soften the color transitions present in the **Red, Green**, and **Blue** channels in the filter’s output on a pixel-by-pixel basis. Posterize creates a “color map” that transforms the pixels in the source image into output pixels. The Color Soften controls soften the channels in this color map. These parameter do not reduce the sharpness of details in the original image; rather they reduces harsh color contrasts, making even extreme posterizations more natural-looking.




|  |  |
| --- | --- |
| [![posterize.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg) | [![posterize.color.soften.15](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.color_.soften.15.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.color_.soften.15.jpg) |
| Red Soften=0 | Red Soften=15 |


**Pre Blur** blurs the source image before the posterization is applied. This operation softens the edges of the posterized image, without increasing the number of output colors.




|  |  |
| --- | --- |
| [![posterize.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg) | [![posterize.preblur.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.preblur.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.preblur.20.jpg) |
| Pre Blur=0 | Pre Blur=20 |


**Post Blur** blurs the image after posterization takes place, creating softer edges where the colors blend. Increasing Post Blur increases the number of output colors.




|  |  |
| --- | --- |
| [![posterize.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg) | [![posterize.postblur.20](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.postblur.20.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.postblur.20.jpg) |
| Post Blur=0 | Post Blur=20 |


 


**Scramble Parameter Group**


Use the Scramble controls to change the order of appearance of the levels in each of the RGB channels.


**Red Scramble, Green Scramble**, and **Blue Scramble**, scramble the output levels in their respective color channels. Each unit of Scramble applied to a channel switches two of the color levels in the output.


These settings create unusual effects. For example, a Scramble setting of 1 might change the list of values from 0, 64, 127, 191, 255 to 0, 255, 127, 191, 64. Pixels whose red channel was closest to 64 now have a red channel of 255, and pixels whose red channel was closest to 255 have a red channel of 64. In the illustrations below, the image’s green channel is posterized to 10 levels of green. The number of distinct red and blue levels is reduced to the minimum number of 2.




|  |  |
| --- | --- |
| [![posterize.original](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.original.jpg) | [![posterize.scramble.10](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.scramble.10.jpg)](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2013/06/posterize.scramble.10.jpg) |
| Scramble Red Level=0 | Scramble Red Level=10 |


**Maximum Scramble** controls the maximum distance in color space between the scrambled levels. At low Maximum Scramble values, only levels close to each other in color space are scrambled. At high values, very disparate levels such as pure black and pure white can be scrambled.


**Random Seed** controls the value used to seed the random number generator used by the Scramble controls. Adjust this value to get different random arrangements of the scrambled levels.


**Mix with Original** blends the source and filtered images. Use this parameter to animate the effect from the unfiltered to the filtered image without adjusting other settings, or to reduce the effect of the filter by mixing it with the source image.


 


**PixelChooser**


The BCC PixelChooser provides simple, built-in masking of the effect result.  The PixelChooser is generally used to select a portion of the image and restrict an effect to just the selected area while maintaining the original image content in unselected regions.  The selection can be based on geometric shapes or on the image’s luma/color properties.


For more information on the PixelChooser, [Click Here](/documentation/continuum/bcc-pixel-chooser/).

 