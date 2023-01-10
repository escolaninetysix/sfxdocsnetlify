{
"date": "2019-06-12",
"title": "BCC+Radial Tint",
"category": "BCC Grads and Tints",
"link": "bcc-radial-tint/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Radial Tint filter tints the image using multi-color, radially graduated filters 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_338.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Tint Mode**: Selects how color is applied to the image.


* *Normal*: Tints the image while retaining highlights.
* *Tint*: The image is tinted by replacing hue and saturation.
* *Hue*: The image is tinted by only replacing hue.
* *Lighten*: Pixels darker than the color are replaced, and pixels lighter than the color do not change.
* *Darken*: Pixels lighter than the color are replaced, and pixels darker than the color do not change.


#### Color 1


Sets the color for the top left quadrant of the image.


**Color**: Sets the color through the use of a standard color picker.


**Opacity**: Sets the opacity of the color.


#### Color 2


The Color 2 controls are the same as the controls for Color 1 except it is applied to the top right quadrant of the image.


#### Color 3


The Color 3 controls are the same as the controls for Color 1 except it is applied to the bottom right quadrant of the image.


#### Color 4


The Color 4 controls are the same as the controls for Color 1 except it is applied to the bottom left quadrant of the image.


#### Radial Grad


Sets the position, rotation and aspect ratio of the radial gradient.


**Position**: There is an on-screen control in the center of the image. By clicking and dragging the on-screen control, the position of the grad can be adjusted.


**Position X**: The horizontal position of the grad.


**Position Y**: The vertical position of the grad.


Note: In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.


**Size**: The size of the grad.


**Rotation**: The rotation of the grad.


**Aspect**: The aspect ratio of the grad.


#### Highlights


**Preserve Highlights**: Preserves the white areas of the image.


**Exposure Compensation**: Exposure Compensation adds back the brightness loss as a result of the filter application.


#### Spot


A spot in the form of a radial gradient can optionally be used to control where color is added to the image.


* **Position**: There is an on-screen control in the center of the image. By clicking and dragging the on-screen control, the position of the spot can be adjusted.
* **Position X**: The horizontal position of the spot.
* **Position Y**: The vertical position of the spot.
	+ Note:In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.
* **Aspect**: The aspect ratio of the spot.
* **Radius**: The un-blurred radius of the spot.
* **Falloff Radius**: The blurred edge radius.
* **Falloff**: Moves the falloff towards the spot center point.
* **Invert**: Inverts the spot.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Radial Tint from the Grads and Tint unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Radial Grad > Position, Size, Rotation and Aspect.
5. To set your own radial gradient colors, click on the Color 1, 2, 3 or 4 > Color boxes and select colors.Color 1 is the top left quadrant of the image, Color 2 is the top right quadrant, Color 3 is the bottom right quadrant and Color 4 is the bottom left quadrant.
6. If you want less coloring of the image, turn down Color 1, Color 2, Color 3 or Color 4 > Opacity.
7. Image highlights can be retained by adjusting the Preserve Highlights control to a value of 100.
8. Change your View to Gradient to see the color gradient being applied to the image.
9. Change your View back to Output to see the filtered image. You can also mask out a portion of the Radial Tint effect using a Spot mask.
10. To use a Spot mask with the Radial Tint, click on Spot > Enable.
11. Set the Spot > Radius, Falloff Radius and Falloff.
12. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 