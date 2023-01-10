{
"date": "2019-06-12",
"title": "BCC+Defog",
"category": "BCC Color & Tone",
"link": "bcc-defog/"
}

 
NEW IN CONTINUUM 2021, the BCC+ DeFog filter restores clear day contrasts and colors of a scene taken in bad weather such as fog and mist. It is also successful in removing the effects of optical Fog and Diffusion filters. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_206.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


**Color**: The Color parameter sets the color of the fog to be removed through the use of a standard color picker. The default color is white.


**Vanishing Point**: A vanishing point along the direction of increasing distance in the image is used to remove fog. By default, the vanishing point is set to the center of the screen. Essentially, the fog is removed in a radial pattern emanating from the vanishing point. So at the default center position, fog is removed in a circular pattern with a greater amount of fog being removed from the center while falling off at the edges. For instance, if your fog moves in the direction of top right to bottom left, set your vanishing point towards the top right corner and the fog removal will be more intense at the upper right and fall off at the bottom left. However, in most cases, the vanishing point can be left in the center of the screen and you will obtain acceptable results.


There is an on-screen control in the center of the image. By clicking and dragging the on-screen control, the position of the vanishing point can be adjusted.


**Position X**: The horizontal position of the vanishing point.


**Position Y**: The vertical position of the vanishing point.


Note:To see the on-screen control in After Effects/Premiere Pro, you may need to highlight Defog in the Effect Controls window. On Avid Editing Systems, the Vanishing Point parameters are named only X and Y.


**Defog**: Sets the amount of fog to be removed from the scene.


**Min Depth**: Controls how much fog is removed from the darker areas of the image.


**Max Depth**: Controls how much fog is removed from the brighter areas of the image.


#### Color Correct


* **Hue:** Rotates the hue of the image.
* **Saturation:** Adjusts the saturation of the image*.*Positive values saturate, negative values desaturate.
* **Brightness:** Adjusts the brightness of the image. Positive values brighten, negative values darken.
* **Contrast:** Adjusts the contrast of the image. Positive values increase contrast, negative values decrease contrast.
* **Gamma:** Adjusts the gamma of the image. The gamma adjustment leaves the white and black points the same and only modifies the values in-between. Positive values lighten the midtones, negative values darken the midtones.
* **Temperature:** Sets the color of the image to be either warmer or cooler. Dragging the slider to the right makes the image cooler (bluer) and dragging the slider to the left makes the image warmer (redder).
* **Cyan/Magenta:** Adds either Cyan or Magenta to the image. Dragging the slider to the right makes the image more magenta and dragging the slider to the left makes the image more cyan.
* **Red:** Adds or subtracts red from the image.
* **Green:** Adds or subtracts green from the image.
* **Blue:** Adds or subtracts blue from the image.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ DeFog from the BCC Color and Tone unit category.
2. Click the BCC FX Editor button from the Effects and Presets banner. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Click on the Defog > Color picker and click on an area of fog.This sets the color of the fog to be removed.
5. Adjust the Defog > Defog parameter to remove more fog or mist.The fog is removed in a radial pattern emanating from the vanishing point. For instance, if your fog moves in the direction of top right to bottom left, set your vanishing point towards the top right corner and the fog removal will be more intense at the upper right and fall off at the bottom left. However, in most cases, the vanishing point can be left in the center of the screen and you will obtain acceptable results.
6. If needed, move the Vanishing Point to a new location by clicking and dragging the on-screen control in the center of the screen.If the defogging operation causes the shadow areas to become too contrasty, adjust the Min Depth slider to a lower value. This will bring back some shadow detail.
7. Lower the Min Depth value if you have lost to much detail in the shadow portions of the image.
8. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.


