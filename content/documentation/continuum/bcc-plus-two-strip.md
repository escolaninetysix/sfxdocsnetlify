{
"date": "2019-06-12",
"title": "BCC+ Two Strip",
"category": "BCC Film Style",
"link": "bcc-plus-two-strip/"
}

 
NEW IN CONTINUUM 2021.5, the BCC+ Two Strip filter simulates the Technicolor® Two Strip process, which was the first stab at producing color motion pictures and consisted of simultaneously photographing two black and white images using red and green filters. This look creates an odd but pleasing hand-painted look where faces appear normal and green takes on a blue-green quality, while the sky and all things blue appear cyan. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2021/06/Image_381.png) **Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Opacity**: Sets the intensity of the of the effect.


#### Strips


* **Red Intensity**: Intensifies red values in the image.
* **Red Smooth**: Blurs the red matte that is used to isolate the red values. Use this control to smooth out any noise that may appear if the Red Intensity is turned up to a high value.
* **Green Intensity**: Intensifies green values in the image.
* **Green Smooth**: Blurs the green matte that is used to isolate the green values. Use this control to smooth out any noise that may appear if the Green Intensity is turned up to a high value.
* **Blue Intensity**: Intensifies blue values in the image.
* **Blue Smooth**: Blurs the blue matte that is used to isolate the blue values. Use this control to smooth out any noise that may appear if the Blue Intensity is turned up to a high value.


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


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Two Strip from the BCC Film Styles unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Change your View to Red, Green or Blue to see the matte values.In some of the filters, a matte is generated to create the desired effect–in this case, modifying the intensity of the red, green and blue values. Normally, the areas that are white in the matte are the areas that will be adjusted by a particular filter or control. The Red, Green and Blue Intensities, on the other hand, make adjustments where you see black in the matte.
5. Adjust the Intensity of whatever color channel you are viewing and you will see that certain values become darker. These are the values that will be intensified in the color image.
6. Change your View to Output to see the color image.
7. Adjust the Red, Green and Blue Intensities until you have the desired levels of red, green and blue in the image.
8. You may need to use the Red, Green and Blue Smooth controls to smooth out any noise that may have appeared if the intensities were turned up to high values.The Smooth controls are set to a low value by default.
9. Set the Opacity to a lower level if the strength of the effect looks too strong.Color Correct controls are also provided for additional control.
10. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


