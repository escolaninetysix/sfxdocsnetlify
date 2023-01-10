{
"date": "2019-06-12",
"title": "BCC+Kelvin",
"category": "BCC Color & Tone",
"link": "bcc-kelvin/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Kelvin filter allows for the adjustment of standardized color temperature. Degrees Kelvin is the standard unit of measure for color temperature which is a way to characterize the spectral properties of a light source. Low color temperature implies warmer (redder) light, while high color temperature implies a colder (bluer) light. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_253.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Color Temperature


The Color Temperature of the image is determined by the difference of the Destination and Source Kelvin parameters. For instance, if your Source Kelvin is 3200 degrees Kelvin and you adjust the Destination Kelvin to 6500 degrees,


your image would turn blue. This is the same as using tungsten indoor film meant to be used with lighting balanced for 3200 degrees Kelvin outside in daylight which is 6500 degrees Kelvin.


* **Destination Kelvin**: Sets the destination color temperature of the image in degrees Kelvin.
* **Source Kelvin**: Sets the source color temperature of the image in degrees Kelvin.
* **Opacity**: Sets the opacity of the color temperature adjustment.
* **Preserve Highlights**: Preserves the white areas of the image.
* **Exposure Compensation**: Exposure Compensation adds back the brightness loss as a result of the color temperature application.


#### Grad


BCC+ Kelvin can optionally use a gradient that limits where the filter is applied. Grad is the transition area between the colored portion and the original image. Its direction, corners and size can be adjusted.


**Enable**: Turns the grad on and off.


**ND Brightness**: Darkens the colored portion of the grad.


**Type**: Controls the direction of the grad.


* *Top-to-bottom*: The direction of the grad is from top to bottom.
* *Bottom-to-top*: The direction of the grad is from bottom to top.
* *Left-to-right*: The direction of the grad is from left to right.
* *Right-to-left*: The direction of the grad is from right to left.
* *Horizontal Strip*: Horizontal strip grad.
* *Vertical Strip*: Vertical strip grad.


**Size**: The size of the grad.


**Angle**: The angle of the grad.


Note:In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Kelvin from the BCC Color and Tone unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets. The Color Temperature of the image is determined by the difference of the Destination and Source Kelvin parameters.
4. Adjust the Destination Kelvin slider.Presets for a number of different light sources and conditions are provided in degrees Kelvin, the standard unit of measure for color temperature.
5. If you want less coloring of the image, turn down the Color Temperature > Opacity.
6. Image highlights can be retained by adjusting the Color Temperature > Preserve Highlights control to a value of 100.The temperature adjustment can be applied through a gradient creating a graduated transition between the colored portion and the original image.
7. Click on the Grad > Enable checkbox to activate the Grad.
8. Adjust the Grad > Type, Corner Points, Size and Angle.To adjust the Corner Points, just click and drag them to the desired location.
9. If you are curious, you can see what the Grad looks like by changing your View to Grad. Change your View to Output when done.
10. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


