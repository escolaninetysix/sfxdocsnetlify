{
"date": "2019-06-12",
"title": "BCC+Polarizer",
"category": "BCC Color & Tone",
"link": "bcc-polarizer/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Polarizer filter simulates the effect of polarizer filters on footage. The greatest use of polarizing filters is to achieve a darkened, deep blue sky. Our digital version of the Polarizer is designed to do just that. Through the use of a matte and an adjustable gradient, the color of the sky can be adjusted. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_333.png) **Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### Sky


Color Correct controls are provided to adjust the sky.


* **Hue**: Rotates the hue of the sky.
* **Saturation**: Adjusts the saturation of the sky. Positive values saturate, negative values desaturate.
* **Brightness**: Adjusts the brightness of the sky. Positive values brighten, negative values darken.
* **Contrast**: Adjusts the contrast of the sky. Positive values increase contrast, negative values decrease contrast.
* **Gamma**: Adjusts the gamma of the sky. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.
* **Temperature**: Sets the color temperature of the sky. Dragging the slider to the right makes the sky cooler (bluer) and dragging the slider to the left makes the sky warmer (redder).
* **Red**: Adds or subtracts red from the sky.
* **Green**: Adds or subtracts green from the sky.
* **Blue**: Adds or subtracts blue from the sky.


#### Temperature


Applies a warming filter to the image.


* **Color**: Sets the color through the use of a standard color picker.
* **Opacity**: Sets the opacity of the warming or cooling.
* **Preserve Highlights**: Preserves the white areas of the image.
* **Exposure Compensation**: Exposure Compensation adds back the brightness loss as a result of the warming or cooling.


#### Matte


* **Hue**: The Polarizer isolates the sky using a matte based on a blue hue. Use the Hue eyedropper to select the exact color of the sky if you are not seeing enough polarization.
* **Range**: Increases or decreases the range of values in the hue matte. A low Range value indicates a narrow range of values. A high Range value indicates a large range of values included in the matte.
* **Blur**: Sets the softness of the matte by using a quality blur.


#### Grad


The Polarizer can optionally use a gradient that limits where the filter is applied. For instance, if the polarization is affecting areas other than the sky, enable the Grad and adjust it to limit the areas of polarization.


Grad is the transition area between the colored portion and the original image. Its direction, corners and size can be adjusted.


**Enable**: Turns the grad on and off.**ND Brightness**: Darkens the colored portion of the grad.


**Type**: Controls the direction of the grad.


* *Top-to-bottom*: The direction of the grad is from top to bottom.
* *Bottom-to-top*: The direction of the grad is from bottom to top.
* *Left-to-right*: The direction of the grad is from left to right.
* *Right-to-left*: The direction of the grad is from right to left.
* *Horizontal Strip*: Horizontal strip grad.
* *Vertical Strip*: Vertical strip grad.


**Size**: The size of the grad.


**Angle**: The angle of the grad.


Note: In some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Polarizer from the BCC Color and Tone unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Change your View to Matte to see the matte values.In some of the filters, a matte is generated to create the desired effect–in this case, polarization.
5. Change the Matte > Hue parameter if you want to select different blue values to be used for the sky matte.A matte is generated based on the blue values in the sky. Skies vary in their color of blue, so you can adjust the matte to accommodate your sky. The blue that is used to create the matte can be modified by using Matte > Hue to select the exact blue value and Matte > Range to select the amount of blue values to be used for the matte.
6. Increase the Matte > Range control to add more values to the sky matte. Decrease for less values.
7. Increase the Matte > Blur parameter to soften the transition areas of the matte.Remember, the areas that are white in the matte are the areas that will be polarized.
8. Change your View to Output to see the filtered image.
9. Adjust the Sky color settings to make the sky look polarized–usually Brightness and Saturation.
10. If the polarization is affecting areas other than they sky, enable the Grad and adjust it to limit the areas of polarization.To adjust the Corner Points, just click and drag them to the desired location.[Go to the](index.html%3Fpage_id=bcc-polarizer.html#bookmark561)Grad section of Common Filter Controls to see how the Grad controls work.
11. If you applied Warm Polarizer, adjust the Warming > Color and Opacity sliders to your liking.
12. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 