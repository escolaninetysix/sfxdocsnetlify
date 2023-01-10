{
"date": "2019-06-12",
"title": "BCC+Streaks",
"category": "BCC Lights",
"link": "bcc-streaks/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Streaks filter creates horizontal or vertical streaks around highlights in the image. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_377.png) **Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Blend**: Determines the blend mode to be used to create the streak effect.


* *Add*: The light is added to your image.
* *Screen*: The light is combined with the image using a Screen blend mode. This looks kind of like the Add blend mode, but highlights are retained.


**Brightness**: Sets the intensity of the streaks.


#### Streaks


**Horizontal Streaks**: Creates horizontal streaks.


**Vertical Streaks**: Creates vertical streaks.


#### Color


The Color parameter sets the color of the streaks through the use of a standard color picker. The default color is white.


#### Matte


A matte is used to create the streak effect.


**Position:** Pinpoints the color values to be used in the matte. For a luminance matte, a Position value of 100 would make a white matte of the highlights and a value of 0 would make a white matte of the shadows. In the flower image below, look at how the matte varies for different Position values in a red extraction. When the Position is at a value of 100, the red flowers are shown as white in the matte.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_349.gif)Position=100, Range=25
When the Position is moved to 50, the red flowers turn black.


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_350.gif)Position=50, Range=25
**Range:**Increases or decreases the range of values in the matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.


**Blur:** The matte is blurred by a quality blur.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Streaks from the BCC Lights unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. In the Presets window, choose a new preset group from the pop-up menu to see a different set of filter presets.
5. Adjust either the Vertical or Horizontal Streaks controls.Note:If you adjust both the Vertical and Horizontal Streak controls at the same time, the Streak effect will be lost.
6. Select either the Add or Screen Blend mode. Add will burn out highlights while the Screen mode will retain them.
7. Adjust the Streak > Brightness and Color settings to your liking.In some of the filters, a matte is generated to create the desired effect–in this case, streaks.
8. Change your View to Matte to see the matte values.The areas that are white in the matte are the areas where streaks will be introduced. The location of the streaks within the scene can be adjusted by modifying the Matte > Position and Range parameters.
9. Change the Matte > Position parameter if you want to select different values to be used for the matte.
10. Increase the Matte > Range control to add more values to the matte. Decrease for less values.
11. Change your View to Output to see the filtered image.
12. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


