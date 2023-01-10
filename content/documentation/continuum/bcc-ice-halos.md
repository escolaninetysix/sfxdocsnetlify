{
"date": "2019-06-12",
"title": "BCC+Ice Halos",
"category": "BCC Lights",
"link": "bcc-ice-halos/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Ice Halos filter generates atmospheric halos. Ice halos are created when small ice crystals in the atmosphere generate halos by reflecting and refracting light. Most notably, circles form around the sun or moon as well as rare occurrences when the entire sky is painted with a web of arcing halos. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_251.png)**Before and After**
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Light


**Blend**: Determines the blend mode to be used to add the ice halo.


* *Add*: The ice halo is added to your image.
* *Screen*: The ice halo is combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Brightness**: Sets the intensity of the ice halo.


**Displacement**: Displaces the ice halo by the luminance values of the image. This “fakes” the effect of the ice halo wrapping over objects in the image.


**Blur**: Sets the softness of the ice halo.


#### Halo


**Blend**: The ice halo can be added to the entire image or limited to a matte.


* *Halo Only*: The ice halo is added to the entire image.
* *Matte*: The ice halo is added only in areas of the matte.


**Sun Altitude**: Selects the appropriate ice halo pattern based on the sun’s altitude.


**Position**: The ice halo position can be adjusted by clicking and dragging an on-screen control in the center of the image.


**Position X**: The horizontal position of the ice halo.


**Position Y**: The vertical position of the ice halo.


**Scale X**: The horizontal scale of the ice halo.


**Scale Y**: The vertical scale of the ice halo.


**Gang Scale**: The Scale X and Scale Y slider values can be ganged together.


#### Matte


A matte can be used to limit where the ice halo will be placed. Wherever there is white in the matte is where the ice halo will be added. To use a matte to limit where the ice halo will be added, *Halo > Blen*d must be set to Matte. 


**Extract On**: allows for the selection of the type of matte. Select whichever type isolates the desired values. A matte is created based on one of the following:


* *Luminance:* A matte is created based on the luminance of the image.
* *Hue:* A matte is created based on the hue of the image. When adjusting the Position parameter, you are selecting different hues.
* *Saturation:* A matte is created based on the saturation of the image.
* *Average:* A matte is created based on the average of the image’s RGB values.
* *Red:* A matte is created based on the image’s red values.
* *Green:* A matte is created based on the image’s green values.
* *Blue:* A matte is created based on the image’s blue values.
* *Cyan:* A matte is created based on the image’s cyan values.
* *Magenta:* A matte is created based on the image’s magenta values.
* *Yellow:* A matte is created based on the image’s yellow values.


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:**Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**Blur:** The matte is blurred by a quality blur.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Ice Halos from the BCC Lights unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. You can also choose different ice halos by adjusting the Halo > Sun Altitude slider.
5. Choose Light > Blend > Add or Screen blend mode.Add will burn out highlights while Screen will retain them.
6. In the Light menu, adjust the Brightness as well as the Displacement and Blur of the ice halo if you’d like.
7. Adjust the position of the ice halo by clicking and dragging the center image point to the desired location.
8. You can also use the Halo > Scale control to transform the ice halo.
9. Combine the ice halo with a matte by changing Halo > Blend from Halo Only to Matte.Matte only adds the ice halo in the areas of the matte. If you are not seeing enough of the ice halo, your matte should be adjusted.
10. Change your View selector to Matte to see the matte values.The default matte settings are preset to a highlight matte. The areas that are white in the matte are the areas where the ice halo will be added into the image. The location of the ice halo within the scene can be adjusted by changing the Matte > Position and Range parameters.
11. Change the View selector from Matte to Output.
12. Change the Matte > Position parameter if you want to change where you see the ice halo.
13. Increase the Matte > Range value to add more of the ice halo to the scene. Decrease to see less of the ice halo.
14. Increase the Matte > Blur parameter to soften the matte.
15. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



