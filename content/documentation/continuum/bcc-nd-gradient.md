{
"date": "2019-06-12",
"title": "BCC+ND Gradient",
"category": "BCC Grads and Tints",
"link": "bcc-nd-gradient/"
}

 
NEW IN CONTINUUM 2021, the BCC+ ND Gradient filter darkens only a portion of the image using a graduated transition between the darkened portion and the original image. It selectively adjusts brightness without affecting color balance. The most likely use for ND Gradient would be to balance the difference between the sky and ground in a landscape. 


![](https://borisfx-com-res.cloudinary.com/image/upload//documentation/continuum/uploads/2020/10/Image_314.png)**Before and After**  

### Presets and the FX Editor


The FX Editor provides a convenient way to store and retrieve factory installed and/or user generated filter presets. To select a preset, open the FX Editor interface and pick one from the Presets panel. Click the apply button in the [FX Editor](/documentation/continuum/bcc-fx-editor) to return to the host user interface. 


To save a custom preset, click the “Create Custom Preset” icon in the top right corner of the parameter list, next to the filter name, set a name for the new custom preset in the dialog that appears and click done. 


### Filter Parameters


#### F-Stop


Exposure: Darkens the image using F-Stops as the unit of measure.


Preserve Highlights: Preserves the white areas of the image.


#### Grad


Grad is the transition area between the darkened portion and the original image. Its direction, corners and size can be adjusted. 


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


1. Apply BCC+ ND Gradient from the Grads and Tint unit.
2. Click the BCC FX Editor button. The FX Editor user interface opens and consists of Presets, Parameters and Viewer windows.
3. Try out some of the presets.
4. Adjust the Exposure slider to vary the amount of neutral density being applied to the image.
5. Adjust the Grad > Type, Corner Points, Size and Angle.To adjust the Corner Points, just click and drag them to the desired location.
6. If you are curious, you can see what the Grad looks like by changing your View to Grad. Change your View to Output when done.
7. If you want less darkening of the image in the area of the Grad, adjust F-Stop > Exposure.
8. Click the Apply button to return to the host application.


The values of the parameter adjustments in the FX Editor user interface are transferred to your host application.



 