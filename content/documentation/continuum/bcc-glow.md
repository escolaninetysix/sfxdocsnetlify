{
"date": "2019-06-12",
"title": "BCC+Glow",
"category": "BCC Lights",
"link": "bcc-glow/"
}

 
NEW IN CONTINUUM 2021, The BCC+ Glow Filter creates glows and blooms around selected areas of the image.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_233.png)**Before and After**
### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Glow


**Blend**: Determines the blend mode to be used to create the glow effect.


* *Add*: The glow is added to your image.
* *Screen*: The glow is combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Brightness**: Sets the intensity of the glow.


**Blur**: Sets the softness of the glow.


**Color**: The Color parameter sets the color of the glow through the use of a standard color picker. The default color is white.


#### Color Correct


* **Hue:**Rotates the hue of the image.
* **Saturation:** Adjusts the saturation of the image*.*Positive values saturate, negative values desaturate.
* **Brightness:**Adjusts the brightness of the image. Positive values brighten, negative values darken.
* **Contrast:** Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.
* **Gamma:** Adjusts the gamma of the image. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.
* **Temperature:**Sets the color of the image to be either warmer or cooler. Dragging the slider to the right makes the image cooler (bluer) and dragging the slider to the left makes the image warmer (redder).
* **Cyan/Magenta:** Adds either Cyan or Magenta to the image. Dragging the slider to the right makes the image more magenta and dragging the slider to the left makes the image more cyan.
* **Red:**Adds or subtracts red from the image.
* **Green:** Adds or subtracts green from the image.
* **Blue:**Adds or subtracts blue from the image.


#### Matte


 A matte can be used to limit the glow effect. Wherever there is white in the matte is where the glow adjustment will occur. Using advanced image slicing algorithms, mattes are created using luminance, hue, saturation, average, red, green, blue, cyan, magenta, and yellow values. 


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:**Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**Blur:** The matte is blurred by a quality blur.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Glow from the BCC Lights unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Select either the Glow > Blend > Add or Screen blend mode.Add will burn out highlights while the Screen Mode will retain them.
5. Adjust the Glow > Brightness, Blur and Color settings to your liking.In some of the filters, a matte is generated to create the desired effect–in this case, glow.
6. Change your View to Matte to see the matte values.The areas that are white in the matte are the areas where glow will be introduced. The location of the glow within the scene can be adjusted by modifying the Matte > Position and Range parameters.
7. Change the Matte > Position parameter if you want to select different values to be used for the matte.
8. Increase the Matte > Range control to add more values to the matte. Decrease for less values.
9. Increase the Matte > Blur parameter to soften the transition areas of the matte.
10. Change your View to Output to see the filtered image.
11. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


