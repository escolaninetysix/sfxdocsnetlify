{
"date": "2019-06-12",
"title": "BCC+Colorize Gradient",
"category": "BCC Grads and Tints",
"link": "bcc-colorize-gradient/"
}

 
NEW IN CONTINUUM 2021, the BCC+ Colorize Gradient filter uses multiple colors to colorize the image according to the image’s brightness values. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_201.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


Opacity: Sets the overall opacity of the colorization.


#### Shadows


**Enable**: Determines whether or not the color contributes to the gradient.


**Color**: Picks the color that the image will be colorized with. Select the desired color using the color picker.


**Position**: Determines where the colorization is applied to the image. By default, Shadows are set to 0, which is the shadow areas. A value of 50 would be the midtones, while 100 would be highlights.


#### Midtones


The Midtones controls are the same as the controls for the Shadows, except by default, the colorization is applied to the midtones of the image.


#### Highlights


The Highlights controls are the same as the controls for the Shadows, except by default, the colorization is applied to the highlights of the image.


#### Grad


You can optionally use a gradient that limits where the filter is applied. Grad is the transition area that goes from the colorized image to the original image. Its direction, corners and size can be adjusted.


**ND Brightness**: Darkens the colored portion of the grad.


**Type:** Controls the direction of the gradient


* *Top-to-bottom:* The direction of the gradient is from top to bottom.
* *Bottom-to-top:* The direction of the gradient is from bottom to top.
* *Left-to-right:* The direction of the gradient is from left to right.
* *Right-to-left:* The direction of the gradient is from right to left.
* *Horizontal Strip*: Horizontal strip gradient gradient
* *Vertical Strip:* Vertical stripgradient grad.


**Size:** Adjusts the overall size of the gradient.


**Angle:** Adjusts the angle of the gradient


The grad can also be corner pinned by adjusting the Corner Pin sliders as well as dragging the four points on the corners of the screen.


Note: You may need to zoom the image out a bit to see the corner points. In addition, to see and adjust the corner points in After Effects, make sure that the effect title in the Effect Controls window is highlighted. For Final Cut Pro, you must activate the cross hair icon next to the corner position parameters to see and adjust the corner points on the screen.


* Upper-Left: Controls the X and Y position of the Upper Left Point.
* Upper-Right: Controls the X and Y position of the Upper Right Point.
* Lower-Right: Controls the X and Y position of the Lower Right Point.
* Lower-Left: Controls the X and Y position of the Lower Left Point.


**PixelChooser:**  The BCC PixelChooser provides a way for the user to select which pixels in the filtered source are actually going to be affected by the filter, via the generation of image based mattes, gradient mattes and vector shape masks. Mocha planar tracking and vector shape masking options are included in the PixelChooser, which allows for the generation of motion-tracked mask shapes as a hold-back mask. 


For more information on the PixelChooser, [Click Here.﻿](/documentation/continuum/)


### Working with The Filter


1. Apply BCC+ Colorize Gradient from the Grads and Tint unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Choose your color by clicking on the Shadows, Midtones or Highlights > Color boxes and selecting a color.
5. Adjusting the Shadows, Midtones or Highlights > Position slider will set where the colors are applied to the image.
6. If you want less coloring of the image, turn down Opacity.You can also use a gradient to control where the colorization is applied.
7. To use a gradient, click on Grad > Enable.
8. Adjust the Grad > Type, Corner Points, Size and Angle.To adjust the Corner Points, just click and drag them to the desired location.Note:On some host programs, you must highlight the effect title in the Effect Controls window to see the on-screen controls.
9. If you are curious, you can see what the Grad looks like by changing your View to Grad. Change your View to Output when done.
10. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 